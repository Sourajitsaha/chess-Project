class GPawn {

    constructor(color, index){
        this.color = color;
        this.index = index;

        this.imagewhite = loadImage("images/whitepawn.png");
        this.imageblack= loadImage("images/blackpawn.png");
    }

    display(){
        if(this.color == "white"){
            image(this.imagewhite, (75 + this.index*100), 175, 50, 50);
        } else{
            image(this.imageblack, (75 + this.index*100), 675, 50, 50);
        }
        
    }

}