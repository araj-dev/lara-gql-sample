FROM alpine:3.7
RUN apk --update add libtool gettext-dev libpng-dev mysql-client php7-ctype php7-simplexml php7-common php7-xsl php7-zip php7-tokenizer php7-tidy php7-xml php7-xmlreader php7-xmlwriter php7-session php7-sockets php7-phar php7-mysqlnd php7-opcache php7-openssl php7-pcntl php7-pdo php7-pdo_mysql php7-iconv php7-intl php7-json php7-mbstring php7-mcrypt php7-mysqli php7-dom php7-fileinfo php7-gd php7-gettext php7-bcmath php7-bz2 php7-curl php7-fpm php7-pear php7-phpdbg php7-xdebug nodejs nodejs-dev nodejs-npm curl-dev bzip2-dev openssl-dev git bash make openssl readline autoconf automake curl bzip2 gzip tar zip gcc g++ && rm -rf /var/cache/apk/*
WORKDIR /app
ADD ./docker/laravel/conf/php.ini /etc/php7/php.ini
ADD ./docker/laravel/conf/xdebug.ini /etc/php7/conf.d/xdebug.ini
ENV COMPOSER_VENDOR_DIR /app/vendor
ADD ./lighthouse-example/composer.json /app
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');" && \
    php /usr/local/bin/composer install --no-scripts --no-autoloader
ADD ./lighthouse-example/package.json /app
RUN npm install
ADD ./lighthouse-example /app
RUN php /usr/local/bin/composer install
ADD ./docker/laravel/conf/php-fpm.conf /etc/php7/php-fpm.conf
