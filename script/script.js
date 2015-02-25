var app = {};



app.dup = function(){
// alert('this is being called');

	$('img').on('click', function(){
		//THIS GETS THE POSITION OF THE BOX BEING CLICKED
		app.pos = $(this).position();
		app.wid = $(this).width();
		app.hgt = $(this).height();
		app.xpos = app.pos.top;
		app.ypos = app.pos.left;
		app.xoff = app.wid/2;
		app.yoff = app.hgt/2;
		//

		console.log('X position is: ' + app.xpos + '& Y position is: ' + app.ypos);
		console.log('X Offset is: ' + app.xoff + '& Y Offset is: ' + app.yoff);
		//
		app.boxPlace = [
			topLeft = {put1 : app.ypos, put2 : app.xpos},
			topRight = {put1 : app.ypos, put2 : app.xoff},
			bottomLeft = {put1 : app.yoff, put2 : app.xpos},
			bottomRight = {put1 : app.yoff, put2 : app.xoff},
		]
		$(this).remove();//THIS HIDES WHAT'S CLICKED
		console.log('Half the width is: ' + app.xoff + '   Half the length is: ' + app.yoff);
		// app.classHolder = app.classHolder + app.classCounter;
			//THS WILL CREATE THE NEW QUADRANTS
			app.colorSelect = [
				'green','mistyrose','purple','yellow','green'
			]
			for (var i = 0; i < 4; i++) {
				app.bp = app.boxPlace[i];
				var img = $('<img>').addClass('box-inner').attr('src', 'images/1483011695.jpg');
				// var img = $('<img>').addClass('box-inner').attr('src', 'images/1483011695.jpg').css('top', app.bp.put1).css('left', app.bp.put2).css('width', app.xoff).css('height', app.	yoff).css('background', app.colorSelect[i]);
				img.appendTo('.wrapper');
			};
	});
}

$(function() {
	app.dup();
	
});