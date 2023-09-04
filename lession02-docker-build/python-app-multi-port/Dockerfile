# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Python application code into the container
COPY app.py /app/app.py

# Install Flask
RUN pip install flask

# Expose the ports your app will run on
EXPOSE 3003
EXPOSE 3004

# Start your application
CMD ["python", "app.py"]

