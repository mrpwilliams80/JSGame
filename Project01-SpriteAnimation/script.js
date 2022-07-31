//#region Imports
import createCanvas                 from "./Modules/canvas_setup.js";
import loadImage                    from "./Modules/load_image.js";
import createSpriteDataStructure    from "./Modules/sprite_data_structure.js";
import createFrameManager           from "./Modules/frames.js"
import createState                  from "./Modules/state.js";
import animateDataStructure         from "./Modules/animate_data_structure.js"
//#endregion

//#region User Constants
const CANVAS_ID        = "canvas1";
const CANVAS_CONTEXT    = "2d";
const CANVAS_WIDTH      = getComputedStyle(
                            document.getElementById(CANVAS_ID)
                            ).getPropertyValue("width").slice(0,-2);
const CANVAS_HEIGHT     = getComputedStyle(
                            document.getElementById(CANVAS_ID)
                            ).getPropertyValue("height").slice(0,-2);
const SPRITE_WIDTH      = 575;
const SPRITE_HEIGHT     = 523;
/* NOTE:
 * I have deliberately altered some of the values for numOfFrames to create 
 * smoother animation cycles.
 */
const ANIMATION_STATES  = [
    {
        name: "idle",
        numOfFrames: 6,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "jump",
        numOfFrames: 7,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "fall",
        numOfFrames: 7,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "run",
        numOfFrames: 8,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "dizzy",
        numOfFrames: 10,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "sit",
        numOfFrames: 5,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "roll",
        numOfFrames: 6,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "bite",
        numOfFrames: 7,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "ko",
        numOfFrames: 12,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
    {
        name: "getHit",
        numOfFrames: 4,
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
    },
];
//#endregion

//#region Calculated Constants
const canvas            = createCanvas(
                            CANVAS_ID, CANVAS_CONTEXT, CANVAS_WIDTH,
                            CANVAS_HEIGHT
                            );
const spriteSheet1      = loadImage("./Assets/shadow_dog.png");
const spriteAnimations  = createSpriteDataStructure(ANIMATION_STATES);
const frameManager      = createFrameManager();
const state             = createState();
//#endregion


const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", function(e) {
    state.value = e.target.value;
});

animateDataStructure(
    canvas, spriteSheet1, 6, frameManager, spriteAnimations, state
);