input.onGesture(Gesture.Shake, function () {
    Random_Variable = randint(0, 2)
    if (Random_Variable == 0) {
        basic.showString("Maybe")
    }
    if (Random_Variable == 1) {
        basic.showString("No")
    }
    if (Random_Variable == 2) {
        basic.showString("Yes")
    }
    Random_Variable = 0
})
let Random_Variable = 0
Random_Variable = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.pause(100)
basic.showString("Ask a question")
basic.pause(100)
basic.showString("Shake to get response ")
