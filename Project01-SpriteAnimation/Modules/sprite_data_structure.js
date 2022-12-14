/**
 * Create a data structure to access sprites on sprite sheet; width & height are 
 * illustrative overkill in this instance;
 * 
 * __ARRAY DATA:__
 * - complex arrangement of arrays, objects and key:value pairs; console.log to 
 * visualise
 * 
 * @param {*} animationStates   array of objects containing key:value pairs that 
 *                              define animation states for the loaded sprite
 *                              sheet
 * @returns spriteAnimation array
 */

export default function createSpriteDataStructure(animationStates){

    // create array to store data structure
    let spriteAnimations = []

    // iterate through animation states to create data structure
    animationStates.forEach((state, index) => {
        // create frames object with location array and dimension information
        // *NOTE* dimension information could also have been an array
        let frames = {
            loc: [],
            width: state.width,
            height: state.height,
        }
        // generate pixel positions for loc array
        for (let j = 0; j < state.numOfFrames; j++) {
            let positionX = state.width * j;
            let positionY = state.height * index;
            frames.loc.push({x: positionX, y: positionY});
        }
        spriteAnimations[state.name] = frames
    });

    // return data structure
    return spriteAnimations;

}

