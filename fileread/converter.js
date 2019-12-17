let m;

function convert(l) {
    
    return JSON.parse(l);
}

m = convert('{"flow_in": 487, "flow_out": 511, "temp_in": 21, "temp_out": 29, "pump_pwm_1": 61, "pump_pwm_2": 67, "measured_pump_rpm_1": 5204, "measured_pump_rpm_2": 151, "valve_resistance": 38, "radiator_engaged": 0, "fan_pwm": 27, "measured_fan_rpm": 1034, "tube_LEDs_on": 1, "reservoir_LED_on": 1, "fan_LED_on": 1, "fan_LED_color": 0}');
//console.log(m)
let g = "hej.json"
console.log(g.substring(0, g.length-5))
console.log(g.length-1)
module.exports = convert;