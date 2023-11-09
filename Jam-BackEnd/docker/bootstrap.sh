#!/bin/bash

#*** install app ***#
composer install --prefer-dist

#*** run symfony scripts ***#
php bin/console doctrine:migrations:migrate --no-interaction
php bin/console doctrine:fixtures:load --no-interaction
php bin/console assets:install
php bin/console cache:clear

#*** chown ***#
chown -R www-data:www-data .