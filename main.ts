input.onButtonPressed(Button.A, function () {
    x = 0
    _type = "recepteur"
})
radio.onReceivedString(function (receivedString) {
    x = 1
    if (_type == "recepteur") {
        if (receivedString == "ping") {
            radio.sendString("trouve")
            basic.showIcon(IconNames.Happy)
            music.play(music.stringPlayable("D F G A A B C5 C5 ", 344), music.PlaybackMode.UntilDone)
        }
    }
    if (_type == "emetteur") {
        if (receivedString == "trouve") {
            basic.showIcon(IconNames.Sad)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
            basic.pause(2000)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    x = 0
    _type = "emetteur"
})
input.onGesture(Gesture.Shake, function () {
    x = 2
    _type = "n"
})
let _type = ""
let x = 0
x = 2
_type = "n"
basic.showIcon(IconNames.Target)
basic.forever(function () {
    while (x == 0) {
        led.toggle(randint(0, 4), randint(0, 4))
        basic.pause(30)
    }
})
loops.everyInterval(5000, function () {
    if (_type == "emetteur") {
        radio.sendString("ping")
    }
})
