# Regular build
docker build -t node-app-regular -f Dockerfile-regular .

#Buildx regular (single stage)
time docker buildx build -t node-app-regular --builder mybuilder  -f Dockerfile-regular --load . --no-cache

# Multi-stage build
docker build -t node-app-multistage -f Dockerfile-multistage .

docker images | grep node-app

