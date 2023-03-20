radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.clearScreen()
    }
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.clearScreen()
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    basic.pause(200)
    basic.clearScreen()
    radio.sendNumber(0)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
