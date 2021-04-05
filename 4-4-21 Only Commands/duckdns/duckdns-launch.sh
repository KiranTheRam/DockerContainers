#!/bin/bash
docker create \
--name=duckdns \
-e PUID=1000 \
-e PGID=1001 \
-e TZ=America/New_York \
-e SUBDOMAINS=ramjisingh \
-e TOKEN=36abdedf-13e5-4bf0-863a-d2fd2712ba0a \
-e LOG_FILE=true \
-v /home/docker/docker/duckdns/config:/config \
--net proxynet \
--restart unless-stopped \
ghcr.io/linuxserver/duckdns
