var app = {};


app.click_counter = 0;
//
app.dup = function(){
// alert('this is being called');

	$('img').on('click', function(){
		app.click_counter++;		//
		//THIS GETS THE POSITION OF THE BOX BEING CLICKED
		app.pos = $(this).position();
		app.wid = $(this).width();
		app.hgt = $(this).height();
		app.xpos = app.pos.top;
		app.ypos = app.pos.left;
		//THIS REMOVES WHAT'S CLICKED
		$(this).addClass('hider');
		//THIS STORES THE SRC OF THE IMG CLICKED
		app.grabImg = $(this).attr('src');
		//CREATES THE IMAGE REPLACEMNT DIV
		app.box_holder = 'box' + app.click_counter;
		console.log(app.box_holder + ' This is the box holder');
		var div = $('<div>').addClass(app.box_holder).css('top', app.xpos).css('left', app.ypos).css('width', app.wid).css('height', app.hgt);
		//
		div.appendTo($(this).parent());
		// //
		console.log('X position is: ' + app.xpos + '& Y position is: ' + app.ypos);
		console.log('The width is: ' + app.wid + '   The length is: ' + app.hgt);
		console.log('This is the image src: ' + app.grabImg);


		//
		//ADD TO THE DOM
		//CREATE THE QUADRANTS AND LOAD IN IMG
		for (var i = 0; i < 6; i++) {
			app.counter = i+1;
			console.log(app.counter);

			app.crack_holder = 'crack' + app.counter;
			app.img_crack_holder = '.' + app.box_holder + ' ' + '.' +  app.crack_holder;
			console.log(app.img_crack_holder + '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

			var div_img = $('<div>').addClass(app.crack_holder).css('top', app.xpos).css('left', app.ypos).css('width', app.wid).css('height', app.hgt);	
			div_img.appendTo(div);

			var img = $('<img>').attr('src', app.grabImg);

			// div_img.appendTo('.box' + app.click_counter);
		// 	// console.log(app.counter);
			img.appendTo(app.img_crack_holder);
		};
	});
}

$(function() {
	app.dup();
	
});