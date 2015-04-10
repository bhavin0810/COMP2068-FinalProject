/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Scoreboard object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the scoreboard for the Side Scroller game.
*/


module objects {

    //SCOREBOARD OBJECT ++++++++++++++++++++++++++++++++++++++++
    export class ScoreBoard {

        //PUBLIC INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++
        public lives: number = constants.PLAYER_LIVES;
        public score: number = 0;

        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++
        private _livesLabel: createjs.Text;
        private _scoreLabel: createjs.Text;

        //CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(game: createjs.Container) {

            //create label of the Lives
            this._livesLabel = new createjs.Text("LIVES: ", constants.FONT_SIZE + " " +
                constants.FONT_FAMILY, constants.FONT_COLOUR);
            game.addChild(this._livesLabel);

            //Create Label of the Score
            this._scoreLabel = new createjs.Text("SCORE: ", constants.FONT_SIZE + " " +
                constants.FONT_FAMILY, constants.FONT_COLOUR);

            this._scoreLabel.x = 350;
            game.addChild(this._scoreLabel);

        } //end of constructor

        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++
        update() {
            this._livesLabel.text = "LIVES: " + this.lives.toString();
            this._scoreLabel.text = "SCORE: " + this.score.toString();

        }

    } //end of Scoreboard object

} 