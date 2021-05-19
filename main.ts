let time: number;
let thelight: ?52614;
let lightindex1: number;
let lightindex2: number;
let lights = []
let lights2 = []
let degrees2 = 0
let light_level = 0
let degrees = 0
let greater1 = []
function myMax(list1: any) {
    let max1 = list1[0]
    for (let x of list1) {
        if (x > max1) {
            max1 = x
        }
        
    }
    return max1
}

while (true) {
    time = input.runningTimeMicros()
    if (time == 1000) {
        time = time - 1000
        for (let index = 0; index < 270; index++) {
            degrees = degrees + 1
            light_level = input.lightLevel()
            pins.servoWritePin(AnalogPin.P0, degrees)
            lights.push(light_level)
            lights2.push(degrees)
        }
        for (let key of lights) {
            greater1.push(key)
        }
        thelight = myMax(greater1)
        lightindex1 = _py.py_array_index(lights, thelight)
        lightindex2 = _py.py_array_index(lights2, lightindex1)
        degrees2 = lightindex2
        pins.servoWritePin(AnalogPin.P0, degrees2)
    }
    
}
