FROM php:8.2.7-apache

RUN usermod -u 1000 www-data
RUN groupmod -g 1000 www-data

RUN a2enmod rewrite headers

RUN apt-get update \
    && apt-get install -y --no-install-recommends locales apt-utils git libicu-dev g++ libpng-dev libxml2-dev libzip-dev libonig-dev libxslt-dev xvfb

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen && \
    locale-gen

RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
   mv composer.phar /usr/local/bin/composer

RUN docker-php-ext-configure intl
RUN docker-php-ext-install pdo pdo_mysql gd opcache intl zip calendar dom mbstring zip gd xsl mysqli
RUN pecl install apcu && docker-php-ext-enable apcu


COPY docker/bootstrap.sh /
COPY docker/entrypoint.sh /
RUN ["chmod", "+x", "/entrypoint.sh"]
RUN ["chmod", "+x", "/bootstrap.sh"]
COPY docker/000-default.conf /etc/apache2/sites-enabled/


WORKDIR /var/www/html

ENTRYPOINT ["/entrypoint.sh"]