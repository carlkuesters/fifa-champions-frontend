#!/bin/bash

VERSION=$1
TARGET=$2

# Checkout
git clone https://github.com/carlkuesters/fifa-champions-frontend.git
if [ -n "$VERSION" ]; then
  git checkout "$VERSION"
fi

# Build
sed -i 's/<base href=\"\/\">/<base href=\"\/new\/\">/g' src/index.html
npm install
npm run build

# Deploy
rm -rf "${TARGET}"*
mv dist/fifa-champions/* "${TARGET}"
