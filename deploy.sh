#!/bin/bash
echo -e "Question 1 of 2: \e[36mIs the API in request.js pointing to the \e[1mproduction server\e[0m\e[36m?\e[0m \e[0m(y/n)"
read apiToProduction

if [ "$apiToProduction" != "y" ]; then
  echo -e "\e[31mEnsure that the api is pointing to the production server.\e[0m"
  exit
fi

echo -e "Question 2 of 2: \e[36mHas the \e[1mbuild number\e[0m\e[36m been updated in app.js?\e[0m \e[0m(y/n)"
read buildNumUpdated

if [ "$buildNumUpdated" != "y" ]; then
  echo -e "\e[31mIncrement the build number in app.json.\e[0m"
  exit
fi

echo -e "\e[7m-- Publishing OTA now --\e[0m"
exp publish --release-channel=production
