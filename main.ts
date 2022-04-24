radio.onReceivedValue(function (name, value) {
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
})
let l_motor = 0
let r_motor = 0
let achterui = 0
let rechts = 0
radio.setGroup(69)
basic.forever(function () {
    let b_motor = 0
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
    if (b_motor > 0) {
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, Math.abs(b_motor))
    } else {
        pins.analogWritePin(AnalogPin.P3, 0)
        pins.analogWritePin(AnalogPin.P2, Math.abs(b_motor))
    }
})
