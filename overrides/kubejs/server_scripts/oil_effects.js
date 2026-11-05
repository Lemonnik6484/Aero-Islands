// Oil submersion effects
// - The dark screen overlay is handled client-side by the fluid type
//   (see screenOverlayTexture in startup_scripts/main.js).
// - While the player's eyes are submerged in oil, apply the Darkness effect.

const OIL_FLUID_TYPE = Fluid.of('kubejs:oil').getFluidType()
const OIL_DARKNESS_KEY = 'oilDarknessApplied'

PlayerEvents.tick(event => {
  const player = event.player

  // PlayerEvents.tick is a common event, so only let the server apply effects.
  // Spectators don't get the fluid overlay either, so skip them here too.
  if (player.level.isClientSide() || player.isSpectator()) return

  const eyesInOil = player.isEyeInFluidType(OIL_FLUID_TYPE)

  if (eyesInOil) {
    // Don't take ownership of a Darkness effect the player already had.
    if (!player.persistentData[OIL_DARKNESS_KEY] && !player.hasEffect('minecraft:darkness')) {
      player.persistentData[OIL_DARKNESS_KEY] = true
    }

    if (player.persistentData[OIL_DARKNESS_KEY]) {
      // Refresh about once per second so the effect stays active while submerged.
      if (!player.hasEffect('minecraft:darkness') || event.server.tickCount % 20 === 0) {
        player.potionEffects.add('minecraft:darkness', 40, 0, false, false)
      }
    }
  } else if (player.persistentData[OIL_DARKNESS_KEY]) {
    player.persistentData[OIL_DARKNESS_KEY] = false
    player.removeEffect('minecraft:darkness')
  }
})
