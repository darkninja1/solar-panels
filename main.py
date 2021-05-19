def myMax(list1: List[number]):
    max1 = list1[0]
    for x in list1:
        if x > max1:
            max1 = x
    return max1

light_level = 0
# unknown expression:  178
lights = []
lights2 = []
greater1 = []
degrees = 0
degrees2 = 0
while True:
    time = input.running_time_micros()
    if time == 1000:
        time = time - 1000
        print('now')
        for times in range(271):
            degrees = degrees + 1
            light_level = input.light_level()
            pins.servo_write_pin(AnalogPin.P0, degrees)
            lights[light_level] = degrees
            lights.push(light_level)
            print(degrees)
        for key in lights:
            greater1.append(key)
        thelight = myMax(greater1)
        degrees2 = lights[thelight]
        pins.servo_write_pin(AnalogPin.P0, degrees2)
