/**
 * Created by Jay on 11/14/2016.
 */
$(document).ready(function () {

    ticTacToe.initSelectors();
    ticTacToe.selectorStatesHandler();
});

var xSelector, oSelector, playerSelector, player2Selector, confirmSelector;

var xImgUrl = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIE" +
    "dlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZ" +
    "CAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBo" +
    "aWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0" +
    "iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9Ij" +
    "Y0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDM1NyAzNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1NyAzN" +
    "Tc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2xvc2UiPgoJCTxwb2x5Z29uIHBvaW50cz0iMzU3LDM1LjcgMzIxLjMs" +
    "MCAxNzguNSwxNDIuOCAzNS43LDAgMCwzNS43IDE0Mi44LDE3OC41IDAsMzIxLjMgMzUuNywzNTcgMTc4LjUsMjE0LjIgMzIxLjMsMzU3IDM" +
    "1NywzMjEuMyAgICAgMjE0LjIsMTc4LjUgICAiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC" +
    "9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KP" +
    "C9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";

var oImgUrl = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIE" +
    "dlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZ" +
    "CAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBo" +
    "aWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0" +
    "iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9Ij" +
    "Y0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDUxMCA1MTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMCA1M" +
    "TA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2hlY2stY2lyY2xlLW91dGxpbmUtYmxhbmsiPgoJCTxwYXRoIGQ9Ik0y" +
    "NTUsMEMxMTQuNzUsMCwwLDExNC43NSwwLDI1NXMxMTQuNzUsMjU1LDI1NSwyNTVzMjU1LTExNC43NSwyNTUtMjU1UzM5NS4yNSwwLDI1NSw" +
    "weiBNMjU1LDQ1OSAgICBjLTExMi4yLDAtMjA0LTkxLjgtMjA0LTIwNFMxNDIuOCw1MSwyNTUsNTFzMjA0LDkxLjgsMjA0LDIwNFMzNjcuMi" +
    "w0NTksMjU1LDQ1OXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Z" +
    "z4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8" +
    "Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";

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
        confirmSelector = new selector("#confirm", this.selectorTypes[2], this.selectorSubTypes[4]);
    };
    this.renderAllSelectors = function () {
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
        this.renderAllSelectors();
    };
    this.player2StateHandler = function () {
        if (player2Selector.state == 1) {
            playerSelector.state = 0;
        } else if (player2Selector.state == 0) {
            playerSelector.state = 1;
        }
        this.renderAllSelectors();
    };
    this.xStateHandler = function () {
        if (xSelector.state == 1) {
            oSelector.state = 0;
        } else if (xSelector.state == 0) {
            oSelector.state = 1;
        }
        this.renderAllSelectors();
    };
    this.oStateHandler = function () {
        if (oSelector.state == 1) {
            xSelector.state = 0;
        } else if (oSelector.state == 0) {
            xSelector.state = 1;
        }
        this.renderAllSelectors();
    };
    this.confirmHandler = function(){
        confirmSelector.$id.click(function(){
            if (confirmSelector.state == 1){
                if(playerSelector.state == 0 && player2Selector.state ==0){
                    alert("Please select if you want to play against a computer or a friend");
                    confirmSelector.state = 0;
                }else if(xSelector.state == 0 && oSelector.state ==0){
                    alert("Please select if Player 1 is X or O");
                    confirmSelector.state = 0;
                }else{
                    $("#selectors-container").css("display", "none");
                }
            }
        }.bind(this));
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

        this.confirmHandler();
    };
};

var ticTacToe = new app();



