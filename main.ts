input.onButtonPressed(Button.A, function () {
    Player.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    Player.turn(Direction.Right, 90)
})
let points = 0
let length = 0
let Player: game.LedSprite = null
let lives = 3
Player = game.createSprite(2, 2)
Player.set(LedSpriteProperty.Direction, 0)
let apple = game.createSprite(randint(0, 4), randint(0, 4))
apple.set(LedSpriteProperty.Brightness, 7)
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
Enemy.set(LedSpriteProperty.Brightness, 75)
loops.everyInterval(500, function () {
    Player.move(1)
})
loops.everyInterval(randint(4000, 7000), function () {
    Enemy.delete()
    Enemy = game.createSprite(randint(0, 4), randint(0, 4))
    Enemy.set(LedSpriteProperty.Brightness, 75)
})
basic.forever(function () {
    if (Player.isTouching(apple)) {
        length += 1
        apple.set(LedSpriteProperty.X, randint(0, 4))
        apple.set(LedSpriteProperty.Y, randint(0, 4))
        apple.set(LedSpriteProperty.Brightness, 7)
        points += 1
    }
    if (Player.isTouching(Enemy)) {
        Enemy.delete()
        Enemy = game.createSprite(randint(0, 4), randint(0, 4))
        Enemy.set(LedSpriteProperty.Brightness, 75)
        lives += -1
    }
    if (lives < 1) {
        game.setScore(points)
        game.gameOver()
    }
})
