namespace SpriteKind {
    export const football = SpriteKind.create()
    export const Obsticle = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.football, function (sprite, otherSprite) {
    game.splash("goal")
})
sprites.onOverlap(SpriteKind.football, SpriteKind.Obsticle, function (sprite, otherSprite) {
    game.splash("You lose")
})
let myDart: Dart = null
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 f f f f f 1 f f f f f . 
    . . 1 1 f f f f f 1 f f f f f . 
    . . 1 1 f f f f f 1 f f f f f . 
    . . 1 1 f f f f f 1 1 1 1 1 1 . 
    . . 1 1 f f f f f 1 f f f f 1 . 
    . . 1 1 1 f f f 1 1 f f f f 1 . 
    . . 1 f f f f f f 1 f f f f 1 . 
    . . 1 f f f f f f 1 f f f f 1 . 
    . . 1 f f f f f f 1 f f f f 1 . 
    . . 1 f f f f 1 1 1 1 1 1 1 1 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.football)
myDart.setTrace()
myDart.controlWithArrowKeys()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . . . . . . . . . . . 1 1 . . 1 
    . . . . . . . . . . . 1 1 . . 1 
    . . . . . . . . . . . 1 1 1 1 1 
    . . . . . . . . . . . . . 1 . 1 
    . . . . . . . . . . . . . 1 . 1 
    . . . . . . . . . . . . . 1 . 1 
    . . . . . . . . . . . . . 1 . 1 
    . . . . . . . . . . . . . 1 . 1 
    . . . . . . . . . . . 1 1 1 1 1 
    . . . . . . . . . . . 1 1 . . 1 
    . . . . . . . . . . . 1 1 . . 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
mySprite.setPosition(150, 110)
let mySprite2 = sprites.create(img`
    .............6666...............
    ..........666667766.6666........
    .........677777777767776........
    ......66667775577757777666......
    .....677666675557557776777666...
    .....6776777775555577777766776..
    ...66666777777775777777766666...
    .66667767777755757555777776776..
    6666777677775577557555777767766.
    .6667767777777775577777777767666
    .c6766777677777775777777677766..
    cc77666667777777777777777666666c
    cc76666677777777777777777766776c
    c6666776777777777777766677666776
    66667766667776777767767766766666
    ccc76677677776677766767776776ccc
    cc7766776777677677676667767766cc
    .666c676667677766667766666666cc.
    .ccc66676666776666677677666cccc.
    ...ccc77c6767666676676677666ccc.
    ...cc676c7766676677666666c666cc.
    ....c6cc676c6677677c66c666ccc...
    ....ccccc6c66667667cc6ccc6ccc...
    ......ccccc66c66c66cccccccc.....
    .......cc.cc6c6ccc6cccc.cc......
    ...........cccccccccc...........
    .............feeeeee............
    ............feeeeeefe...........
    .........eeeeefeeeffee..........
    ............ffffeef..ee.........
    ...............fee..............
    ................e...............
    `, SpriteKind.Obsticle)
let mySprite3 = sprites.create(img`
    ..............eeeeeee...........
    ............ee455662e2e.........
    ..........ee45556723e2688.......
    .........e46776677232e777668....
    ........e46745554772227776778...
    .......4448744444777766777678...
    ......4522e7777776777766676668..
    .....4523227766722e666eeeee888..
    ....455232e76672322e4555dddd48..
    ...44567777554623e455ddddddddd4.
    ...e66774554477e455dddd55554dd44
    ..e46777444677e55dd55555d55dddd4
    ..e5668677666e5dd555555555555dde
    .e45544e8776e5d555554555555555de
    .e554eeee66e5d5555d55555dddd54de
    .e55ee44fee5d5d555555d5d5dddddde
    e454eeeefe45d55555555555dd4ddde.
    e5e4eefffe5d55555555d5555dddde..
    e5ee4eeff45d555555555555dddde...
    e5eeeeffe5d55d555d5555d5ddde....
    e5ffefeee5d55545555555ddd4e.....
    e5ffffffe545555555d5d4ddee......
    e54efeff45d55d55555dddde........
    e5eeeffe5dd5555545dddee.........
    e4eeefff5d5555d55ddde...........
    e4efefff5d5d55555d4e............
    .e4efffe5d555555dee.............
    .e54eeee5d545dd4e...............
    ..e554ee5dddddee................
    ...ee5544dddee..................
    .....eeeeeee....................
    ................................
    `, SpriteKind.Obsticle)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Obsticle)
mySprite2.setPosition(44, 101)
mySprite3.setPosition(77, 103)
mySprite4.setPosition(114, 104)
