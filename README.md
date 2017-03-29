## Docker & NodeJS

### Running a simple expressjs-nodejs application in a docker container

Run `docker build -t <image-name> .` at the root project folder. This will build a docker image based on the Dockerfile.
To create a container based off of the image, run the command:
 `docker run --name <container-name> -d -p <local-port>:<container-exposed-port> <image-name>`

```
The -d flag runs the container in a detatched state in the background.
The -p flag maps a local port to an exposed container port.
The --name flag allows you to give your container a name.
```

To get the id of your container run `docker ps`
To confirm that your server has started, run the comand `docker logs <container-id>`
To make a curl request to the routes defined in the app. Run the commands: `curl -i http:localhost:<local-port>` and `curl -i http:localhost:<local-port>/home`

#### Notes
You must have Docker installed on your local machine.