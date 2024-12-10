# Use the official Python 3.9 slim image as the base
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Python script into the container
COPY input.py .

# Specify the command to run the script
CMD ["python", "input.py"]

# i dont know if you can put both in the same dockerfile
# FROM node:16-slim

# WORKDIR /app

# COPY input.js .

# CMD ["node", "input.js"]