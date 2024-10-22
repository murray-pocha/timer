
//get command line arguments (arg)
const args = process.argv.slice(2);
//loop through
for (let i = 0; i < args.length; i++) {
  //Will have to change the arguments to a number
  const time = Number(args[i]);
  //make sure time is a positive number
  if (!isNaN(time) && time > 0) {
    //set a timeout for the sound
    setTimeout(() => {
      process.stdout.write('\x07'); //out put the sound alarm
      console.log(`Alarm goes off in ${time} seconds`);
    }, time * 1000); //second should be changed to millisecond
  } else {
    console.log(`Not a proper time input: ${args[i]}`); //I know its not needed but I like a prompt so I can see whats wrong.
  }
}




