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
1. **`npm install`** - install the npm packages
2. **`gulp init`** - copy three config files into profile folder
    - ssh
    - ble
    - azure-funtion
3. Use the following command to modify your gateway config, fill in the gateway's mac address
   ``` bash
   # For Windows command prompt
   code %USERPROFILE%\.iot-hub-getting-started\config-gateway.json

   # For MacOS or Ubuntu
   code ~/.iot-hub-getting-started/config-gateway.json 
   ```
4. **`gulp setup-remote`** - copy initial script to remote machine
	- bledisco repo's file
5. **`gulp devdisco`** - run sensortagdisco on remote machine to discovery SensorTag
6. **`gulp testconnect --mac <mac>`** - test mac's connectable
7. Use az to get device connection string. And then edit the config with IoT hub name, device connection string and mac address
   ``` bash
   # Get IoT hub device connection string
   az iot device show-connection-string --hub {my hub name} --device-id {device id} --resource-group {resource group name}

   # For Windows command prompt
   code %USERPROFILE%\.iot-hub-getting-started\config-gateway-ble.json

   # For MacOS or Ubuntu
   code ~/.iot-hub-getting-started/config-gateway-ble.json
   ```
8. **`gulp run`** - copy ble-config to remote machine and run BLE sample on remote
9. Start another console to do the following step to read message from azure function.   
   Use az to get IoT hub connection string, device connection string and azure storage connection string.  And then modify the config file.
   ``` bash
   # Get IoT hub connection string
   az iot hub show-connection-string --name {my hub name} --resource-group {resource group name}

   # Get IoT hub device connection string
   az iot device show-connection-string --hub {my hub name} --device-id {device id} --resource-group {resource group name}

   # Get azure storage connection string
   az storage account list -g {resource group name} --query [].name
   az storage account show-connection-string -g {resource group name} -n {storage name}

   # For Windows command prompt
   code %USERPROFILE%\.iot-hub-getting-started\config-gateway-azure-function.json

   # For MacOS or Ubuntu
   code ~/.iot-hub-getting-started/config-gateway-azure-function.json 
   ```
10. **`gulp read`** - read message from azure function