const fs = require('fs');

// 读取API文件;
const apiFile = `./environment/env_${process.env.NODE_ENV}.ts`;
fs.readFile(apiFile, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile('./src/config/environment.ts', data, (error) => {
    if (error) throw error;
  });
});
