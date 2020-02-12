#!/usr/bin/env bash
cd frontend
npm install && PORT=5000 npm start &
FROND_END_PID=$!
cd ../backend
bundle install && rails s -b 0.0.0.0
kill $FROND_END_PID