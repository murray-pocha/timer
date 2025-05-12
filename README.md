# Alarm Timer (Node.js)

This is a simple Node.js script that functions as a countdown timer. When run from the command line with one or more time values (in seconds), the script sets timers and plays a beep sound (`\x07`) when each one finishes.

## How It Works

You provide one or more positive numbers as command-line arguments. Each valid number triggers a corresponding alarm after that many seconds.

Invalid inputs (non-numeric or negative values) are safely ignored with a warning message.

## Example

```bash
node timer.js 3 5 10 -2 abc
Output:

Invalid time input: "-2"
Invalid time input: "abc"
Alarm goes off in 3 seconds
Alarm goes off in 5 seconds
Alarm goes off in 10 seconds

Each alarm includes a beep sound in the terminal.

Usage:
Clone or download this repo.

Run the script in a terminal:

node timer.js <time1> <time2> ...
Replace <time> with one or more positive numbers in seconds.

Requirements
Node.js (v12+)

Author
Created by Murray Pocha as part of Lighthouse Labs Web Development Bootcamp.
