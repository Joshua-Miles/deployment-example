#!/usr/bin/env bash
cd frontend
PORT=5000 npm start &
FROND_END_PID=$!
cd ../backend
rails s -b 0.0.0.0
kill $FROND_END_PID