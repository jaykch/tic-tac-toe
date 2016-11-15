/**
 * Created by Jay on 11/14/2016.
 */
$(document).ready(function () {

    ticTacToe.initSelectors();
    ticTacToe.selectorStatesHandler();

});

var xSelector, oSelector, playerSelector, player2Selector;

function log() {
    console.log(arguments);
}

var selector = function (id, type, subType, cssSettings) {
    this.$id = $(id);
    this.type = type;
    this.subType = subType;
    this.state = 0;

    this.init = function () {
        this.stateHandler();

    };
    this.stateHandler = function () {
        this.$id.click(function () {
            if (this.state === 0) {
                this.state = 1;
            }
            else {
                this.state = 0;
            }
            this.render();
        }.bind(this));
    };
    this.render = function () {
        if (this.state === 0) {
            this.$id.css(cssSettings[1]);
        }
        else {
            this.$id.css(cssSettings[0]);
        }
    };

    this.init();
};

var app = function () {

    this.selectorTypes = ["peg", "player", "confirm"];
    this.selectorSubTypes = ["x", "o", "player", "player2", "confirm"];
    this.selectorCssSettings = [
        {
            opacity: "0.5",
            margin: "0 20px"
        }, {
            opacity: "1",
            margin: "0 10px"
        }
    ];

    this.initSelectors = function () {
        xSelector = new selector("#x-selector", this.selectorTypes[0], this.selectorSubTypes[0], this.selectorCssSettings);
        oSelector = new selector("#o-selector", this.selectorTypes[0], this.selectorSubTypes[1], this.selectorCssSettings);
        playerSelector = new selector("#player-selector", this.selectorTypes[1], this.selectorSubTypes[2], this.selectorCssSettings);
        player2Selector = new selector("#player2-selector", this.selectorTypes[1], this.selectorSubTypes[3], this.selectorCssSettings);
    };

    this.renderAll = function () {
        playerSelector.render();
        player2Selector.render();
        xSelector.render();
        oSelector.render();
    };

    this.playerStateHandler = function () {
        if (playerSelector.state == 1) {
            player2Selector.state = 0;
        } else if (playerSelector.state == 0) {
            player2Selector.state = 1;
        }
        this.renderAll();
    };
    this.player2StateHandler = function () {
        if (player2Selector.state == 1) {
            playerSelector.state = 0;
        } else if (player2Selector.state == 0) {
            playerSelector.state = 1;
        }
        this.renderAll();
    };
    this.xStateHandler = function () {
        if (xSelector.state == 1) {
            oSelector.state = 0;
        } else if (xSelector.state == 0) {
            oSelector.state = 1;
        }
        this.renderAll();
    };
    this.oStateHandler = function () {
        if (oSelector.state == 1) {
            xSelector.state = 0;
        } else if (oSelector.state == 0) {
            xSelector.state = 1;
        }
        this.renderAll();
    };

    this.selectorStatesHandler = function () {
        playerSelector.$id.click(function () {
            this.playerStateHandler();
        }.bind(this));
        player2Selector.$id.click(function () {
            this.player2StateHandler();
        }.bind(this));
        xSelector.$id.click(function () {
            this.xStateHandler();
        }.bind(this));
        oSelector.$id.click(function () {
            this.oStateHandler();
        }.bind(this));
    };
};

var ticTacToe = new app();



