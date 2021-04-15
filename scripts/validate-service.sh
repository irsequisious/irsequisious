#!/usr/bin/env bash

sudo systemctl status irsequisious
sudo rm -frv /var/www/irsequisious/scripts /var/www/irsequisious/configuration /var/www/irsequisious/appspec.yml
