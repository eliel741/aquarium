player.onItemInteracted(TRIDENT, function () {
    blocks.fill(
    GLASS,
    pos(5, 0, -10),
    pos(12, 7, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(6, 1, -9),
    pos(11, 6, 9),
    FillOperation.Replace
    )
    for (let index = 0; index < 4; index++) {
        mobs.spawn(DOLPHIN, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(GLOW_SQUID, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(AXOLOTL, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(SEA_TURTLE, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(SALMON, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(COD, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        mobs.spawn(TROPICAL_FISH, randpos(
        pos(6, 1, -9),
        pos(11, 6, 9)
        ))
        blocks.place(BUBBLE_CORAL_FAN, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(FIRE_CORAL_FAN, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(HORN_CORAL_FAN, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(BRAIN_CORAL, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(BUBBLE_CORAL, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(BRAIN_CORAL_FAN, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(TUBE_CORAL_FAN, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
        blocks.place(FIRE_CORAL, randpos(
        pos(6, 1, -9),
        pos(11, 0, 9)
        ))
    }
})
