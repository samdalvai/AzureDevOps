# syntax=docker/dockerfile:1

FROM php:7.2-apache

RUN apt-get update -y && docker-php-ext-install mysqli && apt-get install net-tools

COPY . /var/www/html/

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]