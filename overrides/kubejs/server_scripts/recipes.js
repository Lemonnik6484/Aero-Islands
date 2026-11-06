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
})
