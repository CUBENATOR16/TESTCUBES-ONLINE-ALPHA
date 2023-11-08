class Game {
    constructor() {
      this.resetTitle=createElement("h2");
      this.resetButton=createButton("");
    
      
  
    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
  
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  //this.handlePlayerControls();
      form = new Form();
      form.display();
  
  
      cube1 = createSprite(width / 2 - 50, height - 100,50,50);
      
      cube1.addImage("cubeBlue",cube1Img);
cube1.scale=1;
      
      
  
  
  
      cube2 = createSprite(width / 2 + 100, height - 100,50,50);
     cube2.addImage("cubeRed",cube2Img);
  cube2.scale=1;
      cubes = [cube1, cube2];
      
    }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
      this.resetTitle.html("Restart Game"); this.resetTitle.class("resetText");
       this.resetTitle.position(width / 2 + 200, 40);
        this.resetButton.class("resetButton");
       this.resetButton.position(width / 2 + 230, 100);
    }
  
    play() {
      this.handleElements();
  this.handleResetButton();
      Player.getPlayersInfo();
 
      if (allPlayers !== undefined) {
      image(backgroundImage,0,-height*5,width,height*6);
      //image(cube2Ani,0,height,width,height);
        var index = 0; for (var plr in allPlayers) { 
           index = index + 1; 
            var x = allPlayers[plr].positionX; 
            var y = height - allPlayers[plr].positionY;
          
            
             cubes[index - 1].position.x = x;
              cubes[index - 1].position.y = y;
  
  

if(index===player.index){
  camera.position.x=cubes[index-1].position.x;
  camera.position.y=cubes[index-1].position.y;
}

 
         
  
             }
        
        this.handlePlayerControls();

 

  
 
        
        drawSprites();
      }}
    
    handlePlayerControls() { 
     
       if (keyIsDown(UP_ARROW)) {
        
      player.positionY += 5;
      player.update();
        } 
      if(keyIsDown(LEFT_ARROW)){
        
        player.positionX-=5;
        player.update();
      }
      if(keyIsDown(RIGHT_ARROW)){
       
        player.positionX+=5;
        player.update();}
        if(keyIsDown(DOWN_ARROW)){
       
          player.positionY-=5;
          player.update();
  
      }
      }
    
    
       
    
       
      
    handleResetButton(){
      this.resetButton.mousePressed(() => { database.ref("/").set({ playerCount: 0, gameState: 0,players:{} });
       window.location.reload(); });
    }
  

  }
