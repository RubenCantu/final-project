let leds = 0
let counter = 0
let number = 0
let math = 0
input.onPinPressed(TouchPin.P0, function () {
    leds = randint(1, 4)
    if (leds == 1) {
        for (let index = 0; index < 4; index++) {
            led.plot(2, 2)
            basic.pause(100)
            led.unplot(2, 2)
            basic.pause(100)
        }
        basic.pause(500)
        basic.showString("?")
        basic.pause(2000)
        basic.pause(5000)
        music.playMelody("C5 G B A F A C5 B ", 359)
        basic.showString("Answer= ")
        basic.showString("(2,2)")
    } else if (leds == 2) {
        for (let index = 0; index < 4; index++) {
            led.plot(3, 3)
            basic.pause(100)
            led.unplot(3, 3)
            basic.pause(100)
        }
        basic.pause(500)
        basic.showString("?")
        basic.pause(2000)
        basic.pause(5000)
        music.playMelody("C5 G B A F A C5 B ", 359)
        basic.showString("Answer= ")
        basic.showString("(3,3)")
    } else if (leds == 4) {
        for (let index = 0; index < 4; index++) {
            led.plot(4, 4)
            basic.pause(100)
            led.unplot(4, 4)
            basic.pause(100)
        }
        basic.pause(500)
        basic.showString("?")
        basic.pause(2000)
        basic.pause(5000)
        music.playMelody("C5 G B A F A C5 B ", 359)
        basic.showString("Answer= ")
        basic.showString("(4,4)")
    }
})
input.onButtonPressed(Button.A, function () {
    counter = 1
    basic.showNumber(counter)
    counter += 1
    basic.showNumber(counter)
    counter += 1
    basic.showNumber(counter)
    basic.showString("START")
    number = randint(1, 3)
    basic.pause(200)
    if (number == 1) {
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(200)
        basic.showString("scissors")
    } else if (number == 2) {
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.showString("Rock")
    } else if (number == 3) {
        music.playMelody("C5 B A G F E D C ", 110)
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(200)
        basic.showString("paper")
    }
})
input.onButtonPressed(Button.B, function () {
    counter = 1
    basic.showNumber(counter)
    counter += 1
    basic.showNumber(counter)
    counter += 1
    basic.showNumber(counter)
    basic.showString("START")
    math = randint(1, 4)
    if (math == 1) {
        basic.showString("27+3x5-16")
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        music.playMelody("F F F E E F F F ", 344)
        basic.showString("Answer= ")
        basic.showNumber(27 + 3 * 5 - 16)
    } else if (math == 2) {
        basic.showString("4(-6+16)")
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        music.playMelody("B B B C5 C5 B B B ", 344)
        basic.showString("Answer= ")
        basic.showNumber(4 * (-6 + 16))
    } else if (math == 3) {
        basic.showString("5-2(15-4)")
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        music.playMelody("G G G F F G G G ", 344)
        basic.showString("Answer= ")
        basic.showNumber(5 + -2 * 11)
    } else if (math == 4) {
        basic.showString("5+4x2")
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        music.playMelody("G G G F F G G G ", 344)
        basic.showString("Answer= ")
        basic.showNumber(5 + 4 * 2)
    }
})
