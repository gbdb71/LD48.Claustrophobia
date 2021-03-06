import {random} from 'modules/random.js';
import {shuffle} from 'modules/shuffle.js';

function update(delta) {

    // console.log('update demo scene');

    this.delta = delta;
    this.elapsed += delta;

    this.systems.input.update.call(this, this.world.entities);
    this.systems.run.update.call(this, this.world.entities);
    this.systems.collide.update.call(this, this.world.entities);
    this.systems.step.update.call(this, this.world.entities);
    this.systems.shadow.update.call(this, this.world.entities);
    this.systems.hud.update.call(this, this.world.entities);
    this.systems.animate.update.call(this, this.world.entities);

    this.inputs.length = 0;
}

export {update};
