#!/bin/bash

docker create \
	--name=mariadb \
	-e PUID=1000 \
	-e PGID=1001 \
	-e MYSQL_ROOT_PASSWORD=67479280 \
	-e TZ=America/New_York \
	-p 3306:3306 \
	-v /home/docker/docker/mariadb/config:/config \
	--restart unless-stopped \
	ghcr.io/linuxserver/mariadb
