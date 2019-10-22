const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

stdin.on('data', (key) => {
  if (key === 'b') {
    console.log(".");
  }

  if (nums.includes(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout((key) => {
      console.log(".");
    }, key * 1000);
  }

  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});