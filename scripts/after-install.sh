#!/usr/bin/env bash

# Instala las dependencias de la aplicación.
cd /var/www/irsequisious && sudo npm install --production
#
sudo chown -R root:www-data /var/www/irsequisious
sudo chmod -R 755 /var/www
