
# List of Movement

## Normal Movement

### Idle

The model does not move and remains stationary. The player may rotate the miniature and change its Line of Sight.

### Walk

The most common type of Movement. The model may move up to its Speed value.

## Special Movement

### Climb

When a model declares Climb, its Speed becomes halved (rounded up). Climb allows a model to move over an obstacle — a vertical surface or scenery — that is higher than its Hitbox.

- A model cannot perform any other Action while on a vertical surface; if it would perform any Action other than Nothing, it falls and must apply any possible Fall Damage.
- A model may end its movement on a vertical surface.

### Jump

A model may perform a Jump to reach higher or lower ground, to cross a gap, to reach ground behind an obstacle higher than the model's Hitbox, etc.

- The model can move through the air horizontally, vertically, diagonally, or in a parabolic line.
- The distance a model can jump over is equal to half of its Speed value, measured horizontally, vertically, diagonally, or parabolically.
- If the distance between the starting point and destination is larger than the model's halved Speed value, but the top of the model's Hitbox would reach the same (or higher) level as the surface it wants to jump onto, the model is placed on the edge of the surface (the model pulls itself up).
- If the distance is larger than the model's halved Speed value and the model's Hitbox does not reach the surface, the model falls vertically at the end of its halved Speed value and must apply Fall Damage if necessary.

### Run

The model may move a distance of up to its doubled Speed value.
