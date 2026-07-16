# List of Movement

## Normal Movement

### Idle

The model does not move and remains stationary. The player may rotate the miniature and change its Line of Sight.

### Walk

This is the most common type of Movement. The model may move up to its Speed value.

## Special Movement

Note: If a model declares a Special Movement, it may only declare "Nothing" during its Action Step!

### Climb

When a model declares Climb, its Speed is halved (rounded up). Climb allows a model to move over an obstacle, vertical surface, or piece of scenery that is higher than its Hitbox.

- A model cannot perform any other Action while on a vertical surface; if it would perform any Action other than Nothing, it falls and must apply any possible Fall Damage.
- A model may end its movement on a vertical surface.

### Jump

A model may perform a Jump to reach higher or lower ground, to cross a gap, to reach ground behind an obstacle higher than the model's Hitbox, etc.

- The model can move through the air horizontally, vertically, diagonally, or in a parabolic line.
- The distance a model can jump over is equal to half of its Speed value, measured horizontally, vertically, diagonally, or parabolically.
- The distance of a jump is measured after the declaration was made (if you are playing the Assisted or Standard mode, this can be ignored).
- If the distance between the starting point and destination is larger than the model's halved Speed value, but the top of the model's Hitbox would come in contact and reach the same (or higher) level as the surface it wants to jump onto, the model is placed on the edge of the surface (the model pulls itself up).
- If the distance is larger than the model's halved Speed value and the model's Hitbox does not come in contact with the surface it wants to jump onto, the model falls vertically at the end of its halved Speed value, to the lower surface.
- If a model falls, its player must measure the distance of the fall and if necessary, apply Fall Damage.

### Run

The model may move a distance of up to its doubled Speed value.
