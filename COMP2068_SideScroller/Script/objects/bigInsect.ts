/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Big Insect object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Big Insect object for the Side Scroller game.
*/

module objects {

    //BIG INSECT OBJECT ++++++++++++++++++++++++++++++++++++++++++++++
    export class BigInsect extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            //Call the constructor of the super class
            super("bigInsects");

            //Set the object name
            this.name = "bigInsects";

            //set the sound
            this.soundString = "thunder";

            //call the reset object event
            this._reset();

        } // end of constructor
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++

        //Reset Event of the Big Insect
        private _reset() {

            // set the big to start at a random y value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = 0;

            //Add drift to the Big Insect
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;

        } // end of the reset Event

        //CheckBound Method for the Big Insect
        private _checkBounds() {

            if (this.x > (constants.SCREEN_WIDTH + this.width)) {
                this._reset();
            }

        }  //end of the checkbound Event


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y -= this._dy;
            this.x += this._dx;

            this._checkBounds();

        } //end of the update method

    } //end of the BigInsect Object

}    