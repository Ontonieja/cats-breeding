#!/bin/bash

# Change directory to the db folder
cd ./db

# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev
