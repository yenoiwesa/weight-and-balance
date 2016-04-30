#!/bin/bash
# Useful script to start the MongoDB daemon locally and set dbpath
mkdir -p mongodb;
mongod --dbpath mongodb;
