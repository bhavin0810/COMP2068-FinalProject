/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Button object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Button object for the Side Scroller game.
*/

module objects {

    //BUTTON OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++
    export class Button extends createjs.Bitmap {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(stringPath: string, x: number, y: number) {

            //call the constructor of the super class
            super(assetLoader.getResult(stringPath));

            //Set the Mouse Center Values
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = x;
            this.y = y;

            //Add the mouseover and mouseout Events
            this.addEventListener("mouseover", this._buttonOver);
            this.addEventListener("mouseout", this._buttonOut);

        }  //end of the constructor

        // EVENT HANDLERS ++++++++++++++++++++++++++++++++++++++++++++++

        private _buttonOut(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }

        private _buttonOver(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.5;
        }

    } //end of the Button Object

}  