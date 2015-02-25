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
		//
		//CHECKING THE LOCATION
		console.log('X position is: ' + app.xpos + '& Y position is: ' + app.ypos);
		console.log('X Offset is: ' + app.xoff + '& Y Offset is: ' + app.yoff);
		//THIS REMOVES WHAT'S CLICKED
		$(this).addClass('hider');
		console.log('Half the width is: ' + app.xoff + '   Half the length is: ' + app.yoff);
		//THIS STORES THE SRC OF THE IMG CLICKED
		app.grabImg = $(this).attr('src');
		console.log('This is the image src: ' + app.grabImg);
		//THS WILL CREATE THE NEW SPLINTER QUADRANTS
		for (var i = 0; i < 6; i++) {
			// app.bp = app.boxPlace[1];
			app.counter = i + 1;
			//CREATE THE QUADRANTS AND LOAD IN IMG
			// var div = $(',div').add
			var div_img = $('<div>').addClass('crack' + app.counter).css('top', app.xpos).css('left', app.ypos).css('width', app.wid).css('height', app.hgt);	
			var img = $('<img>').attr('src', app.grabImg);
			//ADD TO THE DOM
			div.appendTo('.wrapper');
			img.appendTo('.crack' + app.counter);
		};
	});
}

$(function() {
	app.dup();
	
});