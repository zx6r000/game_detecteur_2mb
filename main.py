def on_button_pressed_a():
    basic.show_string("" + str((randint(0, 10))))
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_number(5)

def on_forever():
    pass
basic.forever(on_forever)
