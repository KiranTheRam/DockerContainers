#!/bin/bash

# Script to start komga container
docker create \
--name=komga \
--user 1000:1000 \
-p 8081:8080 \
--mount type=bind,source=/home/docker/docker/komga/config,target=/config \
--mount type=bind,source=/home/docker/media,target=/media \
--net proxynet \
-e server.servlet.context-path="/komga" \
--restart unless-stopped \
gotson/komga
	
