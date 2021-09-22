var Canvas=new fabric.Canvas("myCanvas");

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
    block_image_object=Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:block_y,
		left:block_x
	});
	Canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '68') // add appropriate keycode
	{
		new_image("doraemon-4553920_1280.png");
	}
	if(keyPressed == '78')
	{
		block_x = 200;
		new_image("NobitaNobi.png");
	}
	
	if(keyPressed == '83')
	{
		block_x =350;
		new_image("Shizuka2005.jpg");
	}
	if(keyPressed == '71')
	{
		block_x = 600;
		new_image("takeshi.jpg");
	}
	if(keyPressed == '50')
	{
		block_x = 700;
	    new_image("Suneo_2005.jpg");
	}
	
}

