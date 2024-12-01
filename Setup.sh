#!/bin/bash

sudo apt update -y

sudo apt install docker.io -y

sudo usermod -aG docker ubuntu

# now logout and login again for changes to take effect

set -e