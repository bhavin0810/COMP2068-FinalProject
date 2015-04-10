/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: small Insect object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Small Insect for the Side Scroller game.
*/

module objects {

    //SMALL INSECT OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++
    export class SmallInsect extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            //call constructor of the super classs
            super("smallInsects");

            //set the name of the object
            this.name = "smallInsects";

            //set the sound
            this.soundString = "thunder";

            this._reset();

        } //end of constructor
       
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {

            // set the small insect to start at a random y value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = 0;

            // add drift to the cloud 
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        } //end of reset method

        private _checkBounds() {
            if (this.x > (constants.SCREEN_WIDTH + this.width)) {
                this._reset();
            }
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y -= this._dy;
            this.x += this._dx;
            this._checkBounds();
        }

    } //end of the Small Insect Object

}