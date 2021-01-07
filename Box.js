class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
  };
  