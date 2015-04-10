/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Space object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Space object for the Side Scroller game.
*/

module objects {

    //SPACE OBJECT++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Space extends createjs.Bitmap {
        
        // PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++++++++
        public width;
        public height;
        public name;

        // PRIVATE INSTANCE VARIABLE +++++++++++++++++++++++++++++++++++
        private _dx = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            //call the consturctor of the super class
            super(assetLoader.getResult("space"));

            //set the name of the object
            this.name = "space";

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this._reset();
            
        } //end of constructor

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++
        private _reset() {
            // set the island to start at a random x value
            this.x = -constants.SPACE_RESET_WIDTH;
            this.y = 0
        }

        private _checkBounds() {
            if (this.x >= 0) {
                this._reset();
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x += this._dx;
            this._checkBounds();
        }

    } //end of space object

}    