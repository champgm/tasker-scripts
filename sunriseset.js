var SunCalc = require('suncalc');

getLocation('net', false, 30);
var loc = global('LOCN').split(','),
	lat = loc[0],
	lng = loc[1];
	
var times = SunCalc.getTimes(new Date(), lat, lng),
	rise  = times.sunrise.getHours() + ':' + times.sunrise.getMinutes(),
	set   = times.sunset.getHours() + ':' + times.sunset.getMinutes();

setGlobal('SUNRISE', rise);
setGlobal('SUNSET', set);
