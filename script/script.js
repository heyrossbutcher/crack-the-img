var app = {};



app.dup = function(){
// alert('this is being called');
	app.classHolder = '.box';
	app.classCounter = 0;

	$(app.classHolder).on('click', function(){
		app.classCounter ++;
		console.log(app.classCounter + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
		//THIS GETS THE POSITION OF THE BOX BEING CLICKED
		app.pos = $(app.classHolder).position();
		app.wid = $(app.classHolder).width();
		app.hgt = $(app.classHolder).height();
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
		// app.classHolder = app.classHolder + app.classCounter;
			//THS WILL CREATE THE NEW QUADRANTS
			app.colorSelect = [
				'green','mistyrose','purple','yellow','black'
			]
			for (var i = 0; i < 4; i++) {
				app.bp = app.boxPlace[i];
				var div = $('<div>').addClass(app.classHolder + app.classCounter).css('top', app.bp.put1).css('left', app.bp.put2).css('width', '50%').css('height', '50%').css('background', app.colorSelect[i]);
				div.appendTo('.wrapper');
			};
				// app.classHolder = app.classHolder + app.classCounter;
				console.log(app.classHolder + '??????????????????????')
	});
}

$(function() {
	app.dup();
	
});