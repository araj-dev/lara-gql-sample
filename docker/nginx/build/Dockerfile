FROM alpine:3.7
RUN apk --update add nginx curl && rm -rf /var/cache/apk/*
WORKDIR /app
RUN mkdir -p /run/nginx
ADD ./docker/nginx/conf/default.conf /etc/nginx/conf.d/default.conf
ADD ./docker/nginx/conf/daemon.conf /etc/nginx/modules/daemon.conf
