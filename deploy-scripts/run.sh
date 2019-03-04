#!/usr/bin/env bash
cd ~/smart-budgets
export PORT=80
export DB_HOST=smartbudgets.co6kasjhhncd.eu-west-1.rds.amazonaws.com
export DB_USER=smartbudgets
export DB_PASSWORD=capitalone
export DB_DATABASE=smartbudgets
export DB_PORT=8080
pm2 start server