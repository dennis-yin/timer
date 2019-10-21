const args = process.argv.slice(2);
timers = args.filter(num => num > 0);

for (num of timers) {
  setTimeout(() => {
    console.log('.');
  }, num * 1000);
}