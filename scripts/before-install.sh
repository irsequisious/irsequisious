#!/usr/bin/env bash

if [[ $OSTYPE == 'linux-gnu' ]]; then
	# Add universe repository.
	sudo add-apt-repository -y universe
	# Update system repositories.
	sudo apt update
	sudo apt upgrade -y
	# Install system software.
	sudo apt install -y curl software-properties-common build-essential
	sudo apt install -y python3 python3-pip
	# Instalación de NodeJS 14.x LTS.
	curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
	sudo apt install -y nodejs
	# Instalación del cliente de Amazon Web Services (AWS).
	sudo pip3 install awscli
	#
	sudo addgroup www-data
	sudo usermod -a -G www-data ubuntu && sudo usermod -a -G www-data root
	# Crea el directorio de logs.
	sudo mkdir -v -p -m 755 /var/log/irsequisious && sudo chown ubuntu:root /var/log/irsequisious
fi
