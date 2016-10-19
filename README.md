---
Author: yuwzho
Date: 2016/10/18
---

# Azure IoT Gateway getting started on host machine
This repo contains scripts help you run the azure-iot-gateway-sdk BLE sample on Intel NUC with SensorTag. And you can also create azure function to receive message which is sent from BLE sample.

## Using these scripts, you can:
* Discovery the availiable sensortag devices
* Test the connectivity of sensortag device
* Run BLE sample on the NUC
* Create your azure function and corresponding storage using your azure subscription
* Connect to your azure storage
* receive message via IoT hub or azure storage

## Command Description
1. **`gulp init`** - copy three config files into profile folder
    - ssh-config
    - ble-config
    - azure-funtion-config
2. **`gulp setup-remote`** - copy initial script to remote machine
	- bledisco repo's file
3. **`gulp devdisco`** - run sensortagdisco on remote machine to discovery SensorTag
4. **`gulp testconnect <mac>`** - test mac's connectable
5. **`gulp run`** - copy ble-config to remote machine and run BLE sample on remote
6. **`gulp read`** - read message from azure function