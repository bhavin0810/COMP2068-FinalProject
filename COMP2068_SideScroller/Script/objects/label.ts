/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Label object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Label for the Side Scroller game.
*/

module objects {

    //LABEL OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++
    export class Label extends createjs.Text {

        // PUBLIC INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        public width: number;
        public height: number;

        //CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(labelString: string, x: number, y: number) {

            // call the constructor of the super class
            super(labelString, constants.FONT_SIZE + " " + constants.FONT_FAMILY,
                constants.FONT_COLOUR);

            //set the height andn width
            this.width = this.getMeasuredWidth();
            this.height = this.getMeasuredHeight();

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = x;
            this.y = y;

        } //end of constructor

    } //end of Label object
}  