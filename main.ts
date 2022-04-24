input.onButtonPressed(Button.AB, function () {
    alles = 0
})
radio.onReceivedValue(function (name, value) {
    if (alles == 69) {
        if (name.compare("mgx") == 0) {
            rechts = value
        }
        if (name.compare("mgy") == 0) {
            achterui = value
        }
        if (name.compare("mgz") == 0) {
            achterui = value
        }
        r_motor = -1 * achterui - rechts
        l_motor = -1 * achterui - rechts
    }
})
let l_motor = 0
let r_motor = 0
let achterui = 0
let rechts = 0
let alles = 0
alles = 69
radio.setGroup(69)
basic.forever(function () {
    if (r_motor > 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, Math.abs(r_motor))
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P0, Math.abs(r_motor))
    }
    if (l_motor > 0) {
        pins.analogWritePin(AnalogPin.P4, 0)
        pins.analogWritePin(AnalogPin.P10, Math.abs(l_motor))
    } else {
        pins.analogWritePin(AnalogPin.P10, 0)
        pins.analogWritePin(AnalogPin.P4, Math.abs(l_motor))
    }
    while (alles == 0) {
        let b_motor = 0
        if (b_motor > 0) {
            pins.analogWritePin(AnalogPin.P2, 0)
            pins.analogWritePin(AnalogPin.P3, Math.abs(b_motor))
        } else {
            pins.analogWritePin(AnalogPin.P3, 0)
            pins.analogWritePin(AnalogPin.P2, Math.abs(b_motor))
        }
    }
    if (alles == 0) {
        if (input.buttonIsPressed(Button.A)) {
            alles = 60
            pins.analogWritePin(AnalogPin.P0, 1023)
            pins.analogWritePin(AnalogPin.P0, 1023)
        }
    }
})
