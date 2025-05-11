# Alarm Timer (Node.js)

This is a simple Node.js script that functions as a countdown timer. When run from the command line with one or more time values (in seconds), the script sets timers and plays a beep sound (`\x07`) when each one finishes.

## How It Works

You provide one or more positive numbers as command-line arguments. Each valid number triggers a corresponding alarm after that many seconds.

Invalid inputs (non-numeric or negative values) are safely ignored with a warning message.

## Example

```bash
node timer.js 3 5 10 -2 abc
