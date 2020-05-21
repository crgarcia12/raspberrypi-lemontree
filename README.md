![Docker Image CI](https://github.com/crgarcia12/raspberrypi-webserver/workflows/Docker%20Image%20CI/badge.svg)

# Building on Windows for Raspberry PI using Github Actions and Docker
This projects deploy a website in raspberry pi container and controls some GPIO

The idea is that you can write code in Visual Studio 2019 in your Windows machine, and the CICD pipeline will build a docker container and deploy it in your RaspberryPi using self hosted agents

## How to install the self hosted agent

### Check if you have ARM or ARM64

```
# If it says aarch64 then it is 64 bit. If it says armv7l 
uname -m
```

### Install the agent:
In GitHub go to Settings -> Actions and install a self hosted agent for ARM or ARM64 based on previous step
Add `raspberry` as an extra tag
 
 
