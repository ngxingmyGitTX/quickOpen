module.exports = function openPath(pathObj, option) {
  const shell = require('shelljs');
  let colors = require('colors');
  if(!pathObj[option.name]){
    console.log('unable to find the specified target, please check your parameters'.red);
    return;
  }
  let ftPath = pathObj[option.name].replace("//sp"," ");
  if (pathObj[option.name]) {
    shell.exec(`explorer ${ftPath}`, (code) => {
      console.log('open is completion!'.green);
      console.log(('code:' + code).white);
    });
  }
}