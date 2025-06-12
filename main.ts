input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    midi.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(988, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
	
})
