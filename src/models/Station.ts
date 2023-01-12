export interface Device {
  solution: Solution[];
  serial: string;
  value: 'ON' | 'OFF';
}
export interface Solution {
  env: string;
  value: number;
}
export interface EnergyPayLoad {
  msg: {
    date: number;
    group: string;
    senders: string;
    titles: string;
  };
  content: {
    controller: {
      operationMode: string;
    };
    devices: Device[];
  };
}
