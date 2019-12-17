
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import {} from './home.reducer';
import './home.scss';

export interface IHomeProp extends StateProps, DispatchProps, RouteComponentProps {}

export const Home = (props: IHomeProp) => (
	<div>
    Home
	</div>
);

const mapStateToProps = ({ home }: IRootState) => ({
});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
