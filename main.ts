let time: number;
let thelight: number;
function myMax(list1: number[]): number {
    let max1 = list1[0]
    for (let x of list1) {
        if (x > max1) {
            max1 = x
        }
        
    }
    return max1
}

let light_level = 0
//  unknown expression:  178
let lights = []
let lights2 = []
let greater1 = []
let degrees = 0
let degrees2 = 0
while (true) {
    time = input.runningTimeMicros()
    if (time == 1000) {
        time = time - 1000
        console.log("now")
        for (let times = 0; times < 271; times++) {
            degrees = degrees + 1
            light_level = input.lightLevel()
            pins.servoWritePin(AnalogPin.P0, degrees)
            lights[light_level] = degrees
            lights.push(light_level)
            console.log(degrees)
        }
        for (let key of lights) {
            greater1.push(key)
        }
        thelight = myMax(greater1)
        degrees2 = lights[thelight]
        pins.servoWritePin(AnalogPin.P0, degrees2)
    }
    
}
