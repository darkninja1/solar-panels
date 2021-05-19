let time: number;
let thelight: ?25533;
let lights = []
let degrees2 = 0
let light_level = 0
let degrees = 0
let greater1 = []
let lights2 : number[] = []
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
        console.log("now")
        for (let index = 0; index < 270; index++) {
            degrees = degrees + 1
            light_level = input.lightLevel()
            pins.servoWritePin(AnalogPin.P0, degrees)
            lights.push(light_level)
            lights[light_level] = [degrees]
            console.log(degrees)
        }
        for (let key of lights) {
            greater1.push(key)
        }
        thelight = myMax(greater1)
        degrees2 = _py.py_array_index(lights, thelight)
        pins.servoWritePin(AnalogPin.P0, degrees2)
    }
    
}
