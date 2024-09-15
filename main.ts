music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showString("YOU ARE DEAD")
})
basic.forever(function () {
    RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
    RingbitCar.forward()
})
