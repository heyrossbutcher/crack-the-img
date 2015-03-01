
$.fn.crackerJack = function(opacBoo, snd){
	click_counter = 0;
	//
	this.find('img').on('click', function(){
		click_counter++;		//
		//THIS GETS THE POSITION OF THE BOX BEING CLICKED
		pos = $(this).position();
		wid = $(this).width();
		hgt = $(this).height();
		xpos = pos.top;
		ypos = pos.left;
		//THIS REMOVES THE IMAGE THAT'S CLICKED
		$(this).addClass('hider');
		//THIS STORES THE SRC OF THE IMG CLICKED
		grabImg = $(this).attr('src');
		//CREATES THE IMAGE REPLACEMNT DIV
		box_holder = 'box' + click_counter;
		console.log(box_holder + ' This is the box holder');
		var div = $('<div>').addClass(box_holder).css('top', xpos).css('left', ypos).css('width', wid).css('height', hgt);
		//THIS PLACES THE BOX HOLDER TO THE CLASS HOLDING THE IMAGE
		div.appendTo($(this).parent());
		//THIS SETS THE VARIABLES FOR THE ARGUMENTS PASSED
		opacSwitcher = opacBoo;
		crackSnd = snd;
		//THIS CHECKS TO SEE IF THE SOUND SHOULD PLAY OR NOT
		if(crackSnd){
			var audioElement = document.createElement('audio');
	        audioElement.setAttribute('src', 'sdfx/sdfx.mp3');
	        audioElement.setAttribute('autoplay', 'autoplay');
	        audioElement.play();
		}
        //THIS RUNS THROUGH THE LOOP PLACING THE ITEMS IN THE DOM
		for (var i = 0; i < 20; i++) {
			counter = i+1;
			//THIS SETS UP THE OPACITY EFFECT 
			opacArray = [0.88, 0.91, 0.94, 0.97, 1];
			opacLength = opacArray.length;
			opacNum = Math.floor(Math.random() * opacLength);
			opac = opacArray[opacNum];
			//THIS CREATES THE NAMING CONVENTION FOR THE NEW DOM ITEMS
			crack_holder = 'crack' + counter;
			img_crack_holder = '.' + box_holder + ' ' + '.' +  crack_holder;
			//THIS IS THE POSITIONING AND SIZING VARIABLE
			var div_img = $('<div>').addClass(crack_holder).css('top', xpos).css('left', ypos).css('width', wid).css('height', hgt);	
			//THIS PUTS THE SHARDS INTO THE HOLDER
			div_img.appendTo(div);
			//THIS PUTS THE IMAGE INTO THE SHARD
			var img = $('<img>').attr('src', grabImg);
			//THIS CHECKS FOR AND ASSIGNS OPACITY
			img.appendTo(img_crack_holder);
			if (opacSwitcher){
				$(img_crack_holder).delay(2500).fadeTo(1, opac);
			}
		};
	});
}