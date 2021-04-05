#!/bin/bash

docker create \
--name=nextcloud \
-e PUID=1000 \
-e PGID=1001 \
-e TZ=America/New_York \
-p 444:443 \
-v /home/docker/docker/nextcloud/config:/config \
-v /home/docker/docker/nextcloud/data:/data \
--net proxynet \
--restart unless-stopped \
ghcr.io/linuxserver/nextcloud
