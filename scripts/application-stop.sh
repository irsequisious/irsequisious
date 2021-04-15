#!/usr/bin/env bash

# [systemctl]
sudo systemctl stop irsequisious && sudo systemctl disable irsequisious
#
sudo rm -frv /var/www/irsequisious
sudo rm -frv /etc/systemd/system/irsequisious.service
