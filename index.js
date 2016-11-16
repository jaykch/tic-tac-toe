/**
 * Created by Jay on 11/14/2016.
 */
$(document).ready(function () {

    app.initSelectors();
    app.selectorStatesHandler();
    app.initGame();
});

var xSelector, oSelector, playerSelector, player2Selector, confirmSelector, player, player2;

//base 64 images for icons, change them accordingly to use anything instead of x and o
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

var Selector = function (id, type, subType, cssSettings) {
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

var App = function () {
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

    //array is later filled with jquery selector objects

    this.initGame = function () {
        this.$selectorsContainer = $("#selectors-container");
        this.resetAppHandler();
        this.startHandler();
        this.resetStates();
    };
    this.initSelectors = function () {
        xSelector = new Selector("#x-selector", this.selectorTypes[0], this.selectorSubTypes[0], this.selectorCssSettings);
        oSelector = new Selector("#o-selector", this.selectorTypes[0], this.selectorSubTypes[1], this.selectorCssSettings);
        playerSelector = new Selector("#player-selector", this.selectorTypes[1], this.selectorSubTypes[2], this.selectorCssSettings);
        player2Selector = new Selector("#player2-selector", this.selectorTypes[1], this.selectorSubTypes[3], this.selectorCssSettings);
        confirmSelector = new Selector("#confirm", this.selectorTypes[2], this.selectorSubTypes[4]);
    };

    this.renderAllSelectors = function () {
        playerSelector.render();
        player2Selector.render();
        xSelector.render();
        oSelector.render();
    };

    this.startHandler = function () {
        $("#start").click(function () {
            ticTacToe.init();
        });
    };
    this.playerStateHandler = function () {
        if (playerSelector.state == 1) {
            player2Selector.state = 0;
        }
        this.renderAllSelectors();
    };
    this.player2StateHandler = function () {
        if (player2Selector.state == 1) {
            playerSelector.state = 0;
        }
        this.renderAllSelectors();
    };
    this.xStateHandler = function () {
        if (xSelector.state == 1) {
            oSelector.state = 0;
        }
        this.renderAllSelectors();
    };
    this.oStateHandler = function () {
        if (oSelector.state == 1) {
            xSelector.state = 0;
        }
        this.renderAllSelectors();
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
    this.confirmHandler = function () {
        confirmSelector.$id.click(function () {
            if (confirmSelector.state == 1) {
                if (playerSelector.state == 0 && player2Selector.state == 0) {
                    alert("Please select if you want to play against a computer or a friend");
                    confirmSelector.state = 0;
                } else if (xSelector.state == 0 && oSelector.state == 0) {
                    alert("Please select if Player 1 is X or O");
                    confirmSelector.state = 0;
                } else {
                    ticTacToe.hideScreen("selectors");
                }
            }
            ticTacToe.initPlayers();
            ticTacToe.renderGame();
        }.bind(this));
    };
    this.resetAppHandler = function () {
        $("#reset").click(function () {
            this.resetApp();
            ticTacToe.showScreen("selectors");
        }.bind(this));
    };
    this.resetStates = function(){
        var name = "<h3>Built By <a href='http://www.jaykch.com/' target='_blank'>Jay Kumar<a> </h3>";
        $("#grid-handle").html(name);
    };

    this.resetSelectorStates = function () {
        confirmSelector.state = 0;
        xSelector.state = 0;
        oSelector.state = 0;
        playerSelector.state = 0;
        player2Selector.state = 0;
    };
    this.resetApp = function () {
        ticTacToe.reset();
        ticTacToe.resetScore();
        ticTacToe.resetCells();
        this.resetSelectorStates();
        this.renderAllSelectors();
    };
};

var Game = function () {

    this.playerScore = 0;
    this.player2Score = 0;

    //css settings to change x's and o's
    //0 is O, 1 is X, and 2 is blank
    this.cellCssSettings = [
        {
            "background": 'url(' + oImgUrl + ') center no-repeat',
            "background-size": '70%'
        }, {
            "background": 'url(' + xImgUrl + ') center no-repeat',
            "background-size": '70%'
        }, {
            "background": 'rgba(0,0,0,0) center no-repeat',
            "background-size": '30%'
        }, {
            "background-size": '30%'
        }
    ];
    this.drawTimoutSettings = [900, 1800, 2700];
    this.winTimoutSettings = [900, 900, 2700];

    //an array with all the cell objects
    this.$cells = [];
    this.unfilledCells = [];
    this.losingCells = [];

    //current active player, 0 is player 1 and 1 is player 2 or ai
    this.currentPlayerState = 0;

    //to check if player is playing against ai or another player
    this.aiActiveState = 0;

    this.init = function () {
        this.$drawScreen = $("#draw");
        this.$winScreen = $("#win");
        this.$winner = $("#winner");
        this.initCells();
    };
    this.initPlayers = function () {
        player = new Player("Player");
        if (player2Selector.state == 0) {
            this.aiActiveState = 1;
            player2 = "";
            player2 = new Player("AI");
        } else if (player2Selector.state == 1) {
            this.aiActiveState = 0;
            player2 = "";
            player2 = new Player("Player2");
        }
        this.initPlayerPegs();
    };
    this.initPlayerPegs = function () {
        if (xSelector.state == 1) {
            player.peg = "x";
            player2.peg = "o";
        } else if (oSelector.state == 1) {
            player.peg = "o";
            player2.peg = "x";
        }
    };
    this.initCells = function () {
        var self = this;
        for (var i = 0; i < 9; i++) {
            this.$cells.push(new Cell(i, self));
            this.unfilledCells = this.$cells;
            this.$cells[i].clickHandler();
        }
    };

    this.renderGame = function () {
        $("#player1-score").html(player.type + ": " + ticTacToe.playerScore);
        $("#player2-score").html(player2.type + ": " + ticTacToe.player2Score);
    };

    this.aiTurnHandler = function () {
        //check if ai is active
        if (this.aiActiveState == 1) {
            setTimeout(function () {
                if (this.currentPlayerState == 1) {
                    ai.turn(this);
                    this.currentPlayerState = 0;
                }
            }.bind(this), 1000);
        }
    };
    this.drawHandler = function () {
        var timeOutReset;
        var timeOutAnimation;
        var timeOut$drawScreen;
        if (this.unfilledCells.length == 0) {
            timeOutAnimation = setTimeout(function () {
                for (var i = 0; i < this.$cells.length; i++) {
                    this.$cells[i].$id.css(this.cellCssSettings[3]);
                }
                clearTimeout(timeOutAnimation);
            }.bind(this), this.drawTimoutSettings[0]);
            timeOut$drawScreen = setTimeout(function () {
                this.showScreen("draw");
                clearTimeout(timeOut$drawScreen);
            }.bind(this), this.drawTimoutSettings[1]);
            timeOutReset = setTimeout(function () {
                this.hideScreen("draw");
                this.reset();
                clearTimeout(timeOutReset);
            }.bind(this), this.drawTimoutSettings[2]);
        }
    };

    this.showScreen = function (type) {
        switch (type) {
            case "draw":
                this.$drawScreen.css("display", "block");
                break;
            case "win":
                this.$winScreen.css("display", "block");
                break;
            case "selectors":
                app.$selectorsContainer.css("display", "block");
                break;
        }
    };
    this.hideScreen = function (type) {
        switch (type) {
            case "draw":
                this.$drawScreen.css("display", "none");
                break;
            case "win":
                this.$winScreen.css("display", "none");
                break;
            case "selectors":
                app.$selectorsContainer.css("display", "none");
                break;
        }
    };

    //array to configure what blocks to check on terminal
    this.gridCellsToCheck = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];

    this.onWin = function () {
        //to avoid drawing the draw screen push an element to unfilled cells so its not empty(draw runs when
        //there are no more unfilled cells
        this.unfilledCells.push(1);
        //stop ai from playing
        this.aiActiveState = 0;

        var winTimeoutReset;
        var winTimeout$winScreen;

        winTimeout$winScreen = setTimeout(function () {
            this.showScreen("win");
            clearTimeout(winTimeout$winScreen);
        }.bind(this), this.winTimoutSettings[1]);
        winTimeoutReset = setTimeout(function () {
            this.hideScreen("win");
            this.reset();
            clearTimeout(winTimeoutReset);
        }.bind(this), this.winTimoutSettings[2]);
    };
    //check if any of the grids has a winning combination
    this.checkTerminal = function () {
        var sum = "";
        //for loop to check all the states that can be the same
        for (var i = 0; i < this.gridCellsToCheck.length; i++) {
            for (var j = 0; j < this.gridCellsToCheck[i].length; j++) {
                sum += this.$cells[this.gridCellsToCheck[i][j]].currentValue;
            }
            if (sum == "ooo" || sum == "xxx") {
                for (var k = 0; k < 9; k++) {
                    this.$cells[k].$id.css("background-size", "30%")
                }
                for (var l = 0; l < this.gridCellsToCheck[i].length; l++) {
                    this.$cells[this.gridCellsToCheck[i][l]].$id.css("background-size", "80%")
                }
                this.onWin();
                this.updateScore(sum);
                return true;
            }
            sum = "";
        }
    };

    this.updateScore = function (winType) {
        if ((winType == "ooo" && player.peg == "o") || (winType == "xxx" && player.peg == "x")) {
            this.playerScore += 1;
            this.$winner.html("Winner is: " + player.type);
        } else {
            this.player2Score += 1;
            this.$winner.html("Winner is: " + player2.type);
        }
        this.renderGame();
    };

    //reset everything except for score for new game
    this.reset = function () {
        this.resetGrid();
        this.resetCellStates();
        this.resetGameStates();
    };
    //reset the whole grid to blank
    this.resetGrid = function () {
        for (var i = 0; i < this.$cells.length; i++) {
            this.$cells[i].$id.css(this.cellCssSettings[2]);
        }
    };
    //resetting cell states for new game
    this.resetCellStates = function () {
        for (var i = 0; i < 9; i++) {
            this.$cells[i].state = 0;
            this.$cells[i].currentValue = "";
        }
    };
    //todo: use reset cells to unbind click events so every time game is reset start button needs to be pressed
    this.resetCells = function () {
    };
    this.resetGameStates = function () {
        this.currentPlayerState = 0;
        this.unfilledCells = this.$cells;
    };
    this.resetScore = function () {
        this.aiActiveState = 0;
        this.playerScore = 0;
        this.player2Score = 0;
    };
};

var Cell = function (id, scope) {

    this.state = 0;
    this.$id = $("#cell-" + id);
    this.id = id;
    //current value to change from x and o so later we can compare for who won
    this.currentValue = "";

    this.pegHandler = function () {

        var x = scope.cellCssSettings[1];
        var o = scope.cellCssSettings[0];

        if (scope.currentPlayerState == 1 && xSelector.state == 1) {
            return o;
        } else if (scope.currentPlayerState == 1 && oSelector.state == 1) {
            return x;
        } else if (scope.currentPlayerState == 0 && xSelector.state == 1) {
            return x;
        } else if (scope.currentPlayerState == 0 && oSelector.state == 1) {
            return o;
        }
    };
    this.clickHandler = function () {
        var self = this;
        this.$id.click(function () {
            if (scope.aiActiveState == 1) {
                if (self.state == 0 && scope.currentPlayerState == 0) {
                    $(this).css(self.pegHandler());
                    self.state = 1;
                    self.currentValueHandler();
                    self.playerChangeHandler();
                    self.unfilledCellsHandler();
                }
            } else if (scope.aiActiveState == 0) {
                if (self.state == 0) {
                    $(this).css(self.pegHandler());
                    self.state = 1;
                    self.currentValueHandler();
                    self.playerChangeHandler();
                    self.unfilledCellsHandler();
                }
            }
            if (player2Selector.state == 0) {
                scope.aiActiveState = 1;
            }
            scope.checkTerminal();
            scope.drawHandler();
            scope.aiTurnHandler();
        });
    };
    this.currentValueHandler = function () {
        if (scope.currentPlayerState == 1 && xSelector.state == 1) {
            this.currentValue = "o";
        } else if (scope.currentPlayerState == 1 && oSelector.state == 1) {
            this.currentValue = "x";
        } else if (scope.currentPlayerState == 0 && xSelector.state == 1) {
            this.currentValue = "x";
        } else if (scope.currentPlayerState == 0 && oSelector.state == 1) {
            this.currentValue = "o";
        }
    };
    this.unfilledCellsHandler = function () {
        if (this.state == 1) {
            scope.unfilledCells = scope.unfilledCells.filter(function (val) {
                return val.id !== this.id;
            }.bind(this));
        }
    };
    this.playerChangeHandler = function () {
        if (scope.currentPlayerState == 0) {
            scope.currentPlayerState = 1;
        } else if (scope.currentPlayerState == 1) {
            scope.currentPlayerState = 0;
        }
    };
};

var Player = function (type) {
    this.peg = "";
    this.type = type;
};

var Ai = function () {

    //basic turn function that randomises ai turn
    this.turn = function (gameScope) {
        var index = Math.floor(Math.random() * gameScope.unfilledCells.length);
        if (gameScope.unfilledCells.length > 0) {
            if (player2.peg == "x") {
                gameScope.unfilledCells[index].$id.css(gameScope.cellCssSettings[1]);
                gameScope.unfilledCells[index].currentValue = "x";
            } else {
                gameScope.unfilledCells[index].$id.css(gameScope.cellCssSettings[0]);
                gameScope.unfilledCells[index].currentValue = "o";
            }
            gameScope.unfilledCells[index].state = 1;
            gameScope.unfilledCells = gameScope.unfilledCells.filter(function (val) {
                return val.id !== gameScope.unfilledCells[index].id;
            }.bind(this));

        }
        gameScope.checkTerminal();
    }
};

var app = new App();
var ticTacToe = new Game();
var ai = new Ai();
