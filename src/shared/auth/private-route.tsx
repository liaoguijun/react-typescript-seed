import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { IRootState } from 'shared/reducers';

interface IOwnProps {
  hasAnyAuthorities?: string[];
}
export interface IPrivateRouteProps extends RouteProps, StateProps, IOwnProps { }

const PrivateRouteComponent = ({
  component: Component,
  isAuthenticated,
  sessionHasBeenFetched,
  hasAnyAuthorities = [],
  isAuthorized,
  ...rest
}: IPrivateRouteProps) => {
  const checkAuthorities = (props) => (isAuthorized ? (
    <Component {...props} />
  ) : <div className="display-flex-absolute"><div className="mg-auto ft-30">暂无权限</div></div>);
  const renderRedirect = (props) => {
    if (!sessionHasBeenFetched) {
      return <div />;
    }
    return isAuthenticated ? (
      checkAuthorities(props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  };
  return <Route {...rest} render={renderRedirect} />;
};

export const hasAnyAuthority = (authorities: string[], hasAnyAuthorities: string[]) => {
  if (authorities && authorities.length !== 0) {
    if (hasAnyAuthorities.length === 0) {
      return true;
    }
    return hasAnyAuthorities.some((auth) => authorities.includes(auth));
  }
  return false;
};
const mapStateToProps = ({
  auth: { isAuthenticated, account, sessionHasBeenFetched },
}: IRootState, { hasAnyAuthorities = [] }: IOwnProps) => ({
  isAuthenticated,
  sessionHasBeenFetched,
  isAuthorized: hasAnyAuthority(account, hasAnyAuthorities),
});

type StateProps = ReturnType<typeof mapStateToProps>;

export const PrivateRoute = connect<StateProps>(
  mapStateToProps,
)(PrivateRouteComponent);

export default PrivateRoute;
