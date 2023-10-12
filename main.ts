let Running = false
let false_start = false
let Start = 0
let End = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    Running = false
    false_start = false
    basic.pause(1000 + randint(0, 2000))
    if (!(false_start)) {
        Start = input.runningTime()
        Running = true
        led.stopAnimation()
        basic.clearScreen()
        led.plot(randint(0, 4), randint(0, 4))
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Running) {
        Running = false
        End = input.runningTime()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.showNumber(End - Start)
    } else {
        false_start = true
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            basic.clearScreen()
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Running) {
        Running = false
        End = input.runningTime()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(2000)
        basic.clearScreen()
        basic.showNumber(End - Start)
    } else {
        false_start = true
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            basic.clearScreen()
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
