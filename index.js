const WebSocket = require('ws');
const fs = require('fs');

const ws = new WebSocket('ws://localhost:8029/racers-ledger/');

global.salvaged = -1;
global.destroyed = -1;

ws.on('open', function open() {
	console.log("socket is open");
});

/*
 * demo dat:
 * {"type":"startShiftEvent"}
 * {"objectName":"Antenna","mass":8.898856,"categories":["Electrical","Prop"],"salvagedBy":"Barge","value":18000.0,"massBasedValue":false,"destroyed":false,"gameTime":20.15814,"systemTime":"2021-05-13T15:03:30.5763813+02:00","type":"shiftSalvageLogEntry"}
 * {"objectName":"Computer Terminal","mass":27.0506058,"categories":["Electrical","Prop"],"salvagedBy":"Barge","value":49250.0,"massBasedValue":false,"destroyed":false,"gameTime":86.31085,"systemTime":"2021-05-13T15:05:51.1263919+02:00","type":"shiftSalvageLogEntry"}
 * {"objectName":"Class I Reactor","mass":222.8344,"categories":["Reactor","Prop"],"salvagedBy":"Barge","value":375000.0,"massBasedValue":false,"destroyed":false,"gameTime":107.354347,"systemTime":"2021-05-13T15:06:12.2624658+02:00","type":"shiftSalvageLogEntry"}
 * {"objectName":"Power Junction Box","mass":11.7605247,"categories":["Electrical","Prop"],"salvagedBy":"Barge","value":34500.0,"massBasedValue":false,"destroyed":false,"gameTime":123.960739,"systemTime":"2021-05-13T15:06:28.8696762+02:00","type":"shiftSalvageLogEntry"}
 * {"type":"endShiftEvent"}
 */

ws.on('message', function incoming(data) {
	console.log(data);
	try {
		ev = JSON.parse(data);
		console.log(ev);

		if( ev.type == "startShiftEvent" ){
			global.salvaged = 0;
			global.destroyed = 0;
		}

		if( ev.type == "shiftSalvageLogEntry" ){
			if( ev.destroyed ){
				global.destroyed += ev.value;
			} else {
				global.salvaged += ev.value;
			}
		}

		fs.writeFileSync('salvaged.txt', salvaged);
		fs.writeFileSync('destroyed.txt', destroyed);
	} catch (err){
		console.error(err)
	}
});
