ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create:brown_sail', 2),
        [
            'CS',
            'SC',
        ],
        {
            S: 'minecraft:stick',
            C: 'farmersdelight:canvas'
        }
    )

    event.remove({ mod: 'create', output: 'crate:white_sail' })

    event.shaped(
        Item.of('create:white_sail', 2),
        [
            'WS',
            'SA',
        ],
        {
        	W: 'minecraft:white_wool',
            S: 'minecraft:stick',
            A: 'create:andesite_alloy'
        }
    )
})
