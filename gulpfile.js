/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
*/
'use strict';

var gulp = require('gulp');
var args = require('get-gulp-args')();

// var doesReadStorage = args['read-storage'];
// var receiveMessages = doesReadStorage ? require('./azure-table.js').readAzureTable : require('./iot-hub.js').readIoTHub;
// var cleanup = doesReadStorage ? require('./azure-table.js').cleanup : require('./iot-hub.js').cleanup;

function initTasks(gulp) {
  /**
   * Setup common gulp tasks: init, install-tools, deploy, run
   */
  require('gulp-common')(gulp, 'gateway', {
    appName: 'getting-started',
    configTemplate: {
      'ssh-config': {
        'device_host_name_or_ip_address': '[device hostname or IP adress]',
        'device_user_name': 'root',
        'device_password': 'root',
      },
      'ble-config': {
        'IoT_hub_name': '[IoT hub name]',
        'IoT_hub_suffix': 'azure-devices.net',
        'devices': [{
          'iot_device_connection_string': '[IoT device connection string]',
          'BLE_mac_address': '[SensorTag mac Address]'
        }]
      },
      'azure-function-config': {
        'iot_hub_connection_string': '[IoT hub connection string]',
        'iot_device_connection_string': '[IoT device connection string]',
        'azure_storage_connection_string': '[Azure storage connection string]',
        'iot_hub_consumer_group_name': 'cg1'
      }
    },
    configPostfix: 'gateway'
  });

  var config = gulp.config;
}

initTasks(gulp);
