module.exports = function reset(pathObj, option) {
  const fs = require('fs');
  const path = require('path');
  let color = require('colors');
  if(!pathObj[option.name]){
    console.log('not match'.red);
    return undefined;
  }
  let val = pathObj[option.name];
  delete pathObj[option.name];
  pathObj[option.newname] = val;
  fs.writeFileSync(
    path.join(__dirname, '../data/paths.json'),
    JSON.stringify(pathObj),
    {
      flag: 'w+'
    }
  );
  console.log('params setup completion!'.green);
  console.log('there is the valid parameters now:');
  for(let name of Object.keys(pathObj)){
    console.log((`
       key: ${name}
       path: ${pathObj[name]}
     `).green);
  }
}