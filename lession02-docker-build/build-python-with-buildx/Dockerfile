# Use an official Python runtime as a parent image
FROM python:3.8-slim as builder

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Build the Python executable
RUN python3 -m py_compile app.py

# Use a smaller base image for the final image
FROM python:3.8-slim

# Set the working directory to /app
WORKDIR /app

# Copy the compiled Python files from the builder stage
COPY --from=builder /app/__pycache__/app.cpython-38.pyc /app/app.pyc

# Run the Python application
CMD ["python3", "app.pyc"]

