# React + Vite

##Running Vite:
To run this application using Vite, follow these steps:

1. Clone this repository to your local machine.
2. Ensure Node.js and npm are installed on your system.
3. Navigate to the project directory.
4. Install dependencies by running:
```npm install```

Start the Vite development server by running:
npm run dev

##Running Tests:
To run the unit tests for this project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running:
```npm install```
4. Run the following command to execute the unit tests:

```npm run test```

#Running Docker:
To run this application in a Docker container, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Ensure Docker is installed and running on your system.
4. Build the Docker image using the following command:

```docker build -t <image-name>```
Once the image is built, run the Docker container with the following command:

```docker run -p <host-port>:<container-port> <image-name>```
Replace ```<host-port>``` with the port number on your local machine where you want to access the application, and ```<container-port>``` with the port number exposed by the application inside the Docker container.