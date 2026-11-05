// KubeJS startup scripts
// Registers custom Oil fluid replicating Create: Diesel Generators' Crude Oil.

StartupEvents.registry('fluid', event => {
  let oil = event.create('oil', 'thick')
    .displayName('Oil')
    .tint(0xFFFFFF)
    .stillTexture('kubejs:block/oil_still')
    .flowingTexture('kubejs:block/oil_flow')
    .slopeFindDistance(2)
    .levelDecreasePerBlock(3)
    .explosionResistance(100)
    .tickRate(25)
    .type(type => type
      .density(100)
      .viscosity(1500)
      .canSwim(true)
      .canDrown(true)
      .canExtinguish(false)
      .canConvertToSource(false)
    )

  oil.bucketItem
    .displayName('Oil Bucket')
    .texture('kubejs:item/oil_bucket')
})
