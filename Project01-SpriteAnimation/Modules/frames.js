/**
 * Create a frameManager object to globally manage frames.
 *
 * __OBJECT DATA:__
 * - _currentFrame_: number of the current frame
 * 
 * __OBJECT METHODS:__
 * - _incFrame_: increase currentFrame by one
 * 
 * @returns frameManager object
 */

export default function createFrameManager(){

    return {
        currentFrame: 0,
        incFrame() {this.currentFrame++;},
    };

}