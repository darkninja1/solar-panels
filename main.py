light_level = 0
lights = {}

def on_button_pressed_a():
    global light_level
    global lights
    greater1 = []
    degrees = 0
    degrees2 = 0
    while True:
        time = input.running_time_micros()
        if (time == 1000):
            time = time - 1000
            for times in range(271):
                degrees = degrees + 1
                light_level = input.light_level()
                pins.servo_write_pin(AnalogPin.P0, degrees)
                lights[light_level] = degrees
                #lights.append(light_level)
            for key in lights:
                greater1.append(key)   
            thelight = max(greater1)
            degrees2 = lights[thelight]
            pins.servo_write_pin(AnalogPin.P0, degrees2) 
            pass        

                

input.on_button_pressed(Button.A, on_button_pressed_a)
'''
while True:
    time = input.running_time()
    print(time)
#1,000 ms = 1 sec   
#60,000 ms = 1 min 
#360,000 ms = 1 hour
'''    