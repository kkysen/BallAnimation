"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bouncingBall_1 = require("./bouncingBall");
const expandingBall_1 = require("./expandingBall");
var AnimationIndex;
(function (AnimationIndex) {
    AnimationIndex[AnimationIndex["EXPANDING_BALL_GAME"] = 0] = "EXPANDING_BALL_GAME";
    AnimationIndex[AnimationIndex["BOUNCING_BALL_GAME"] = 1] = "BOUNCING_BALL_GAME";
    AnimationIndex[AnimationIndex["NUM_ANIMATIONS"] = 2] = "NUM_ANIMATIONS";
})(AnimationIndex = exports.AnimationIndex || (exports.AnimationIndex = {}));
const checkAnimationIndex = function (animationIndex) {
    if (animationIndex === AnimationIndex.NUM_ANIMATIONS) {
        throw new Error("animationIndex can't be NUM_ANIMATIONS");
    }
};
const newAnimationGame = function (animationIndex, parent) {
    switch (animationIndex) {
        case AnimationIndex.NUM_ANIMATIONS:
            checkAnimationIndex(animationIndex);
            return null;
        case AnimationIndex.EXPANDING_BALL_GAME:
            return expandingBall_1.newExpandingBallGame({
                parent: parent,
                gameWidth: 500,
                gameHeight: 500,
                initialBallRadius: 50,
                initialBallRadiusSpeed: 1,
            });
        case AnimationIndex.BOUNCING_BALL_GAME:
            return bouncingBall_1.newBouncingBallGame({
                parent: parent,
                gameWidth: 500,
                gameHeight: 500,
                ballRadius: 50,
            });
    }
};
const newAnimation = function (animationIndex) {
    const div = document.body.appendDiv();
    div.hidden = true;
    return {
        index: animationIndex,
        div: div,
        game: newAnimationGame(animationIndex, div),
    };
};
exports.run = function (animationIndex = AnimationIndex.EXPANDING_BALL_GAME) {
    checkAnimationIndex(animationIndex);
    const switchAnimationButton = document.body.appendButton("Switch Animation");
    const animationName = document.body.appendNewElement("h3");
    const animations = new Array(AnimationIndex.NUM_ANIMATIONS)
        .map((e, i) => newAnimation(i));
    const switchAnimation = function () {
        animations[animationIndex].div.hidden = true; // hide last one
        animationIndex = (animationIndex + 1) % animations.length; // switch to next
        const animation = animations[animationIndex];
        animation.div.hidden = false; // show new one
        animationName.innerText = animation.game.name;
    };
    animationIndex = (animationIndex - 1) % animations.length; // decrease to start with correct one
    switchAnimation();
};
