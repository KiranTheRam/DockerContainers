#!/bin/bash
# Script to start up Ubooquity container
docker create \
  --name=ubooquity\
  -e PUID=1000 \
  -e PGID=1001 \
  -p 2202:2202 \
  -p 2203:2203 \
  -v /home/docker/docker/ubooquity/config:/config \
  -v /home/docker/media/comics:/comics \
  -v /home/docker/media/LightNovels:/LNs \
  -v /home/docker/media/books:/books \
  -v /home/docker/media/manga:/manga \
  -v /home/docker/media/otherComics:/otherComics \
  --net proxynet \
  --restart unless-stopped \
 ghcr.io/linuxserver/ubooquity
