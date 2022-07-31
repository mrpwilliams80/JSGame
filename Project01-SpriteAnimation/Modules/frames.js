/*
 * Manage Frames
 */

export default function createFrameManager(){

    return {
        currentFrame: 0,
        incFrame() {this.currentFrame++;},
    };

}