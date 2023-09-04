docker buildx create --use --name mybuilder --node mybuilder-node --platform linux/amd64,linux/arm64

docker buildx build -t myapp:latest --builder mybuilder --load .
docker buildx build -t myapp:latest --builder mybuilder --push .

#run app
docker run myapp:latest

