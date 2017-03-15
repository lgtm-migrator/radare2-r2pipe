/* pancake - 2016 - radare project */

const r2pipe = require('..');
const fs = require('fs');

const buf = new Buffer([1, 2, 3, 4]);

r2pipe.open('malloc://1024', (err, r2) => {
  if (err) {
    throw err;
  }
  r2.cmd('wx 11223344; p8 4', (err, res) => {
    if (err) {
      throw err;
    }
    console.log('wx', res);
    r2.quit();
  });
});
