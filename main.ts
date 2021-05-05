let light_level = 0
let lights =  {
	
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let time: number;
    
    
    let greater1 = []
    let degrees = 0
    let degrees2 = 0
    while (true) {
        time = input.runningTimeMicros()
        if (time == 1000) {
            time = time - 1000
            for (let times = 0; times < 271; times++) {
                degrees = degrees + 1
                light_level = input.lightLevel()
                pins.servoWritePin(AnalogPin.P0, degrees)
            }
            // lights[light_level] = degrees
            // lights.append(light_level)
            // for key in lights:
            //     greater1.append(key)   
            // thelight = max(greater1)
            // degrees2 = lights[thelight]
            // pins.servo_write_pin(AnalogPin.P0, degrees2) 
            
        }
        
    }
})
/** 
while True:
    time = input.running_time()
    print(time)
#1,000 ms = 1 sec   
#60,000 ms = 1 min 
#360,000 ms = 1 hour

 */
