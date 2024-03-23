# React + Vite

##Running Tests:
To run the unit tests for this project, follow these steps:

1. Clone this repository to your local machine.
Ensure that jest is installed on your system.
Navigate to the project directory.
Run the following command to execute the unit tests:

```npm run test```

#Running Docker:
To run this application in a Docker container, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory.
Ensure Docker is installed and running on your system.
Build the Docker image using the following command:

```docker build -t <image-name>```
Once the image is built, run the Docker container with the following command:

docker run -p <host-port>:<container-port> <image-name>
Replace <host-port> with the port number on your local machine where you want to access the application, and <container-port> with the port number exposed by the application inside the Docker container.