module.exports = function setPath(pathObj, option) {
  const fs = require('fs');
  const path = require('path');
  let color = require('colors');
  pathObj[option.name] = option.path;
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
};