#!/bin/bash
docker create \
--name=swag \
--cap-add=NET_ADMIN \
-e PUID=1000 \
-e PGID=1001 \
-e URL=duckdns.org \
-e SUBDOMAINS=ramjisingh \
-e VALIDATION=http \
-e EMAIL=kramji12@gmail.com \
-e ONLY_SUBDOMAINS=true \
-p 443:443 \
-p 80:80 \
--net proxynet \
-v /home/docker/docker/SWAG/config:/config \
--restart unless-stopped \
linuxserver/swag
