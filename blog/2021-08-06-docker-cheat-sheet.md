---
title: Docker Cheat Sheet
path: /docker-cheat-sheet
date: 2021-08-06
tags: ["Docker"]
---

## Containers

List running containers
```sh
docker ps
```

List all containers
```sh
docker ps -a
```

Start a container
```sh
docker start NAME
```

Stop a container
```sh
docker stop NAME
```

Kill a container
```sh
docker kill NAME
```

## Images

Show all images
```sh
docker image ls -a
```

Delete image
```sh
docker image rm NAME
```

## Run

Run container with following settings:
- In detached mode
- Name "dy"
- Port 8002 externally mapped to port 8000 inside container
- Using amazon/dynamodb-local image

```sh
docker run -d --name dy -p 8002:8000 amazon/dynamodb-local
```
