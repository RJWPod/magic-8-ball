input.onGesture(Gesture.Shake, function () {
    Random_Variable = randint(0, 2)
    if (Random_Variable == 0) {
        basic.showString("Maybe")
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Whole))
    }
    if (Random_Variable == 1) {
        basic.showString("No")
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
    }
    if (Random_Variable == 2) {
        basic.showString("Yes")
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
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
basic.showString("Ask")
basic.pause(100)
basic.showString("then shake")
