lights = []
lights2 = []
degrees2 = 0
light_level = 0
degrees = 0
greater1 = []
def myMax(list1):
    max1 = list1[0]
    for x in list1:
        if x > max1:
            max1 = x
    return max1
while True:
    time = input.running_time_micros()
    if time == 1000:
        time = time - 1000
        for index in range(270):
            degrees = degrees + 1
            light_level = input.light_level()
            pins.servo_write_pin(AnalogPin.P0, degrees)
            lights.append(light_level)
            lights2.append(degrees)
        for key in lights:
            greater1.append(key)
        thelight = myMax(greater1)
        lightindex1 = lights.index(thelight)
        lightindex2 = lights.index(lightindex1)
        degrees2 = lightindex2
        pins.servo_write_pin(AnalogPin.P0, degrees2)