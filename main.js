var canvas = new fabric.Canvas("myCanvas");

var b_w = 30;
var b_h = 30;

var p_x = 10;
var p_y = 10;

var player_object="";

function player_up(){

    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:p_y , 
            left:p_x
        });
        canvas.add(player_object);
    } );
};

function new_img(Get_img){

    fabric.Image.fromURL(Get_img, function(Img){
        Block_img_object = Img;
        Block_img_object.scaleToWidth(b_w);
        Block_img_object.scaleToHeight(b_h);
        Block_img_object.set({
            top:p_y , 
            left:p_x
        });
        canvas.add(Block_img_object);
    } );
};

window.addEventListener("keydown" , my_Keydown)

function my_Keydown(e)
{
    var keypressed=e.keyCode;

    
    if(e.shiftKey==true && keypressed=="80")
    {

        b_h = b_h + 10;
        b_w = b_w + 10;
        document.getElementById("c_w").innerHTML=b_w;
        document.getElementById("c_h").innerHTML=b_h;

    }

    if(e.shiftKey==true && keypressed=="77")
    {

        b_h = b_h - 10;
        b_w = b_w - 10;
        document.getElementById("c_w").innerHTML=b_w;
        document.getElementById("c_h").innerHTML=b_h;

    }

    if(keypressed=="66")
    {
           new_img("brick.jpg");

    }

    if(keypressed=="67")
    {
           new_img("cole block.png");
           
    }

    if(keypressed=="68")
    {
           new_img("diamond block.jpg");
           
    }

    if(keypressed=="71")
    {
           new_img("grass.png");
           
    }

    if( e.shiftKey==true && keypressed=="71")
    {
           new_img("glowstone.png");
           
    }

    if(keypressed=="76")
    {
           new_img("light_green.png");
           
    }

    if(keypressed=="77")
    {
           new_img("moss.png");
           
    }

    if(keypressed=="78")
    {
           new_img("netherrack.jpg");
           
    }

    if(keypressed=="83")
    {
           new_img("stone.jpg");
           
    }

    if( e.shiftKey==true && keypressed=="83")
    {
           new_img("stone briks.jpg");
           
    }

    if(keypressed=="87")
    {
           new_img("wood.jpg");
           
    }







    if(keypressed=="37")
    {
           left();
       console.log("left");
           
}

if(keypressed=="38")
{
       up();
   console.log("up");
       
}

if(keypressed=="39")
{
       right();
   console.log("right");
       
}

if(keypressed=="40")
{
       down();
   console.log("down");
       
}
}

function up(){

if(p_y>=0){

       p_y = p_y - b_h;
       canvas.remove(player_object);
       player_up();

}

}

function left(){

       if(p_x>=0){
       
              p_x = p_x - b_w;
              canvas.remove(player_object);
              player_up();
              
       }
       
       }

function down(){

              if(p_y<=500){
              
                     p_y = p_y + b_h;
                     canvas.remove(player_object);
                     player_up();
                     
              }
              
              }

function right(){

  if(p_x<=950){
                     
                            p_x = p_x + b_w;
                            canvas.remove(player_object);
                            player_up();
                            
                     }
                     
                     }