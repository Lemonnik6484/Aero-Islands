ServerEvents.tags('fluid', event => {
  event.add('c:crude_oil', 'kubejs:oil')
  event.add('c:crude_oil', 'kubejs:flowing_oil')
  event.add('c:oil', 'kubejs:oil')
  event.add('c:oil', 'kubejs:flowing_oil')
})

ServerEvents.tags('item', event => {
  event.add('c:crude_oil_buckets', 'kubejs:oil_bucket')
  event.add('c:oil_buckets', 'kubejs:oil_bucket')
  event.add('c:buckets/oil', 'kubejs:oil_bucket')
  event.add('c:buckets/crude_oil', 'kubejs:oil_bucket')
})

LevelEvents.tick(event => {
  if (event.server.getTickCount() % 20 !== 0) return

  event.level.players.forEach(player => {
    if (player.isEyeInFluidType('kubejs:oil')) {
      player.potionEffects.add('minecraft:blindness', 36, 0, false, false)
    }
  })
})
