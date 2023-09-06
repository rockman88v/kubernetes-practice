#!/bin/bash

# Define the log file path
LOG_FILE="/mydata/app.log"

# Check if the log file exists
if [ ! -f "$LOG_FILE" ]; then
  echo "Log file $LOG_FILE does not exist."
  exit 1
fi

# Continuously tail the log file
tail -f "$LOG_FILE"
