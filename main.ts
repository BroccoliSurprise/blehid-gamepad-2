control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    gamepad.send(
    gamepad._buttons(GameButton.A, false),
    x,
    y,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
bluetooth.onBluetoothConnected(function () {
    led.plotBrightness(0, 0, 121)
})
bluetooth.onBluetoothDisconnected(function () {
    led.unplot(0, 0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    gamepad.send(
    gamepad._buttons(GameButton.A, true),
    x,
    y,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    gamepad.send(
    gamepad._buttons(GameButton.B, false),
    x,
    y,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    gamepad.send(
    gamepad._buttons(GameButton.B, true),
    x,
    y,
    gamepad._dpad(GameDirection.noDirection),
    0,
    0
    )
})
let y = 0
let x = 0
gamepad.startGamepadService()
x = 0
y = 0
let buffer = 2
basic.forever(function () {
    x = input.acceleration(Dimension.X) / buffer
    y = input.acceleration(Dimension.Y) / buffer
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        gamepad.send(
        gamepad._buttons(GameButton.none, true),
        x,
        y,
        gamepad._dpad(GameDirection.noDirection),
        0,
        0
        )
    }
})
