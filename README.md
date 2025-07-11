⏰ Alarm Timer (Node.js)

A simple command-line countdown timer built with Node.js. When run with one or more time values (in seconds), the script sets timers and triggers a terminal beep (\x07) when each timer completes.

📌 Features

Accepts one or more positive numbers as command-line arguments.

Triggers an audible beep when each timer completes.

Ignores invalid inputs (e.g., negative numbers or non-numeric values) with a clear warning message.

🛠️ How It Works

You run the script from the terminal and pass in one or more time values (in seconds).

Each valid time input creates a corresponding timer.

Once a timer expires, it:

Prints a message indicating the alarm has gone off.

Emits a terminal beep.

💡 Example

node timer.js 3 5 10 -2 abc
Output:

Invalid time input: "-2"
Invalid time input: "abc"
Alarm goes off in 3 seconds
Alarm goes off in 5 seconds
Alarm goes off in 10 seconds
Each alarm triggers a terminal beep.

🚀 Getting Started
Clone or download this repository.

Run the script using Node.js:

node timer.js <time1> <time2> ...
Replace <time> with one or more positive integers representing seconds.

📦 Requirements
Node.js (version 12 or higher)

👨‍💻 Author
Created by Murray Pocha
As part of the Lighthouse Labs Web Development Bootcamp

