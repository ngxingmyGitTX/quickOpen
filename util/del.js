module.exports = function delPath(pathObj, option) {
  const fs = require('fs');
  const path = require('path');
  let newObj = null;
  if(option.name) {
    if(pathObj[option.name]){
      delete pathObj[option.name];
      newObj = pathObj;
    } else {
      console.log('unable to find the specified target, please check your parameters'.red);
      return;
    }
  } else {
    newObj = {};
  }
  fs.writeFileSync(
    path.join(__dirname, '../data/paths.json'),
    JSON.stringify(newObj),
    {
      flag: 'w+'
    }
  )
  console.log('delete is completion!'.green);
  console.log('there is the valid parameters now:');
  for(let name of Object.keys(newObj)){
    console.log((`
       key: ${name}
       path: ${newObj[name]}
     `).green);
  }
}