# syntax=docker/dockerfile:1

FROM php:7.2-apache

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y git
RUN docker-php-ext-install mysqli

COPY . /var/www/html/
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

RUN cd /var/www/html/
RUN composer require phpmailer/phpmailer

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]