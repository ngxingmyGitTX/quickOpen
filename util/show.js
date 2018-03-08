module.exports = function showPath(pathObj, option) {
  let colors = require('colors');
  if(option.name){
    if(pathObj[option.name]){
      console.log((`
        key: ${option.name}
        path: ${pathObj[option.name]}
      `).green);
      return undefined;
    }
    console.log('not match'.red);
  } else {
    for(let name of Object.keys(pathObj)){
      console.log((`
        key: ${name}
        path: ${pathObj[name]}
      `).green);
    }
  }
}