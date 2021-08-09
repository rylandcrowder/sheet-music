function Good_King_whensaloss (onoff: boolean, Repeat: number) {
    if (onoff) {
        for (let index = 0; index < Repeat; index++) {
            music.playTone(349, music.beat(BeatFraction.Whole))
            pause(30)
            music.playTone(349, music.beat(BeatFraction.Whole))
            pause(30)
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            pause(30)
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Double))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Double))
            pause(30)
            music.playTone(349, music.beat(BeatFraction.Double))
            pause(1000)
        }
    }
}
forever(function () {
    Good_King_whensaloss(true, 1)
})
