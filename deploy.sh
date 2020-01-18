#!/usr/bin/env zsh

echo "-> clean"
npm run clean
echo "-> build"
npm run build
echo "-> deploy"
netlify deploy --prod -d public

exit 0
