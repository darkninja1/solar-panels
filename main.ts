let light_level = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let time: number;
    
    let lights =  {
    	
    }
    
    let greater = []
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
            // for keys in lights.items():
            //     greater.append(keys)    
            // thelight = max(greater)
            // degrees2 = lights[thelight]
            pins.servoWritePin(AnalogPin.P0, degrees2)
            
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
