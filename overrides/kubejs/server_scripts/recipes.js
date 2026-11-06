ServerEvents.recipes(event => {
    event.remove({ output: 'aeronautics:wooden_propeller' })

    event.remove({ input: 'aeronautics:wooden_propeller', output: 'aeronautics:andesite_propeller' })

    event.shaped(
        Item.of('aeronautics:wooden_propeller', 1),
        [
            'WWW',
            ' W ',
            ' F '
        ],
        {
        	W: '#minecraft:wooden_slabs',
            F: '#minecraft:wooden_fences',
        }
    )

    event.remove({ output: 'create_simulated_additions:ckbgi_2_engine' })

    event.shaped(
        Item.of('create_simulated_additions:ckbgi_2_engine', 1),
        [
            'N',
            'I',
            'F'
        ],
        {
            N: 'minecraft:iron_nugget',
            I: 'create:industrial_iron_block',
            F: 'minecraft:furnace',
        }
    )
})
