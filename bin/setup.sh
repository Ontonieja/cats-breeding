#!/bin/bash


# Run yarn install
echo "Running yarn install..."
yarn install

# Check if yarn install was successful
if [ $? -ne 0 ]; then
  echo "Error: yarn install failed."
  exit 1
fi

# Run docker-compose up
echo "Running docker-compose up..."
docker-compose -f ./docker-compose.yml up -d

# Check if docker-compose up was successful
if [ $? -ne 0 ]; then
  echo "Error: docker-compose up failed."
  exit 1
fi

echo "Setup completed successfully."
