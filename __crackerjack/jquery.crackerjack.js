
$.fn.crackerJack = function(opacBoo, snd){
	click_counter = 0;
	//
	this.find('img').on('click', function(){
		console.log(this + ' ????????????????????????????????????')
		click_counter++;		//
		//THIS GETS THE POSITION OF THE BOX BEING CLICKED
		pos = $(this).position();
		wid = $(this).width();
		hgt = $(this).height();
		xpos = pos.top;
		ypos = pos.left;
		//THIS REMOVES WHAT'S CLICKED
		$(this).addClass('hider');
		console.log('Add class of hider to ' + this + '!!!!!!!!!!!!!!!!!!!!!!!!');
		//THIS STORES THE SRC OF THE IMG CLICKED
		grabImg = $(this).attr('src');
		//CREATES THE IMAGE REPLACEMNT DIV
		box_holder = 'box' + click_counter;
		console.log(box_holder + ' This is the box holder');
		var div = $('<div>').addClass(box_holder).css('top', xpos).css('left', ypos).css('width', wid).css('height', hgt);
		//
		div.appendTo($(this).parent());
		// 
		console.log('X position is: ' + xpos + '& Y position is: ' + ypos);
		console.log('The width is: ' + wid + '   The length is: ' + hgt);
		console.log('This is the image src: ' + grabImg);
		//ADD TO THE DOM
		//CREATE THE QUADRANTS AND LOAD IN IMG
		opacSwitcher = opacBoo;
		crackSnd = snd;
		//
		if(crackSnd){
			var audioElement = document.createElement('audio');
	        audioElement.setAttribute('src', 'sdfx/crack.mp3');
	        audioElement.setAttribute('autoplay', 'autoplay');
	        audioElement.play();
		}
        //
		for (var i = 0; i < 20; i++) {
			counter = i+1;
			//
			opacArray = [0.88, 0.91, 0.94, 0.97, 1];
			opacLength = opacArray.length;
			opacNum = Math.floor(Math.random() * opacLength);
			opac = opacArray[opacNum];
			// $(this).css('opacity', opac);
			console.log('This is the opacity: ' + opac);
			crack_holder = 'crack' + counter;
			img_crack_holder = '.' + box_holder + ' ' + '.' +  crack_holder;
			//
			var div_img = $('<div>').addClass(crack_holder).css('top', xpos).css('left', ypos).css('width', wid).css('height', hgt);	
			div_img.appendTo(div);
			//
			var img = $('<img>').attr('src', grabImg);
			//
			img.appendTo(img_crack_holder);
			if (opacSwitcher){
				$(img_crack_holder).delay(2500).fadeTo(1, opac);
			}
		};
	});
}