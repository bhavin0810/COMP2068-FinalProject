/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: GAME OBJECT SUPER CLASS of all the objects for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Game Object for the Side Scroller game.
*/

module objects {

    //GAMEOBJECT SUPER CLASS of All other Game Objects
    export class GameObject extends createjs.Bitmap {

        // PUBLIC VARIABLES +++++++++++++++++++++++++++++++++++
        public width: number;
        public height: number;
        public isColliding: boolean;
        public soundString: string;
        public name: string;

        // PRIVATE VARIABLE+++++++++++++++++++++++++++++++++++++++++++
        protected _dy;
        protected _dx;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(assetString: string) {

            //call constructor of the super class
            super(assetLoader.getResult(assetString));
            
            //Set the height and width of te GAME OBJECT
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            //console.log(this.width.toString());
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.isColliding = false;

        } // end of constructor

    } //end of Game Object

}    