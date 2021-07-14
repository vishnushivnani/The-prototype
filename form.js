class Form{
    constructor(){
        this.greetings = createElement() 
    }
    display(){
        this.greetings.html('Welcome')
        this.greetings.position(width/2-150,10)
        this.greetings.style('color','#FFEDA3')
        this.greetings.style('font-size','70px')
      
    }
}