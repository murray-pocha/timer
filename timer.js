const args = process.argv.slice(2);

args.forEach(arg => {
  const time = Number(arg);

  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // Beep sound
      console.log(`Alarm goes off in ${time} seconds`);
    }, time * 1000);
  } else {
    console.log(`Invalid time input: "${arg}"`);
  }
});




