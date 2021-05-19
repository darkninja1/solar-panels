#due to microbits not having all the same functions and methods as python 3 i had to improvise
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
    if time == 3600000:
        #resetting all variables
        time = time - 3600000
        pins.servo_write_pin(AnalogPin.P0, 0)
        degrees2 = degrees2 - degrees2
        degrees = degrees - degrees
        light_level = light_level - light_level
        lights.clear()
        lights2.clear()
        greater1.clear()
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
        lightindex2 = lights2.index(lightindex1)
        degrees2 = lightindex2
        pins.servo_write_pin(AnalogPin.P0, 0)
        pins.servo_write_pin(AnalogPin.P0, degrees2)
