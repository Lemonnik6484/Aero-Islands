const OIL_FLUID_TYPE = Fluid.of('kubejs:oil').getFluidType()
const OIL_DARKNESS_KEY = 'oilDarknessApplied'

PlayerEvents.tick(event => {
  const player = event.player

  if (player.level.isClientSide() || player.isSpectator()) return

  const eyesInOil = player.isEyeInFluidType(OIL_FLUID_TYPE)

  if (eyesInOil) {
    if (!player.persistentData[OIL_DARKNESS_KEY] && !player.hasEffect('minecraft:darkness')) {
      player.persistentData[OIL_DARKNESS_KEY] = true
    }

    if (player.persistentData[OIL_DARKNESS_KEY]) {
      if (!player.hasEffect('minecraft:darkness') || event.server.tickCount % 20 === 0) {
        player.potionEffects.add('minecraft:darkness', 100, 0, false, false)
      }
    }
  } else if (player.persistentData[OIL_DARKNESS_KEY]) {
    player.persistentData[OIL_DARKNESS_KEY] = false
    player.removeEffect('minecraft:darkness')
  }
})
