#!/bin/bash
LOG_FILE="/mydata/app.log"
while true; do
  current_time=$(date +'%Y%m%d %H:%M:%S')
  echo "The time is $current_time" >> $LOG_FILE
  sleep 5
done
