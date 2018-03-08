#!/usr/bin/env node
let program = require('commander');
let color = require('colors');

let baseFileObj = JSON.parse(JSON.stringify(require('../data/paths.json')));
program.version('1.0.0'); // 配置版本
// set
program
  .command('set [name]')
  .alias('s')
  .description('set a name: path you need to open')
  .option('-p, --path [path]', 'the path that one-to-one match your name')
  .action(function (name, options) {
    if (!name || !options.path) {
      console.log('require name and path params'.red);
      return;
    }
    console.log('set is progressing......'.yellow);
    let set = require('../util/set');
    set(baseFileObj, {
      name: name,
      path: options.path
    });
    process.exit(1);
  });
// reset
program
  .command('reset [name]')
  .alias('r')
  .description('reset a name')
  .option('-new, --newname [newname]', 'the newname that you want to replace the old one')
  .action(function (name, options) {
    if (!name || !options.newname) {
      console.log('require name params'.red);
      return;
    }
    console.log('reset is progressing......'.yellow);
    let reset = require('../util/reset');
    reset(baseFileObj, {
      name: name,
      newname: options.newname
    });
    process.exit(1);
  });
// delete
program
  .command('del [name]')
  .alias('d')
  .description('delete one or all of the records that have been stored')
  .action(function (name) {
    console.log('delete is progressing......'.yellow);
    let del = require('../util/del');
    del(baseFileObj, {
      name: name
    });
    process.exit(1);
  });
// show
program
  .command('show [name]')
  .alias('s')
  .description('show one or all of the records that have been stored')
  .action(function (name) {
    console.log('show is progressing......'.yellow);
    let show = require('../util/show');
    show(baseFileObj, {
      name: name
    });
    process.exit(1);
  });
// open
program
  .command('open [name]')
  .alias('o')
  .description('open the path corresponding to the name')
  .action(function (name) {
    if (!name) {
      console.log('require name params');
      return;
    }
    console.log('open is progressing......'.yellow);
    let open = require('../util/open');
    open(baseFileObj, {
      name: name
    });
    process.exit(1);
  });
program.parse(process.argv); //初始化执行