#Jquery plugin

Crackerjack is a jquery plugin that allows you to create a sweet, sweet splintering glass effect on your img tags.

Simply call the plugin on the class you want and it will affect any img tag within that class.


Directions
* Download the plugin here, open and place the contents in your root folder.
* This plugin requires Jquery, so your HTML page should contain jquery, the crackerjack plugin and as well as the code that will be calling the plugin. All placed in that order.
* Once the scripts are set up you can place the plugin code on your class:
* $('your-div-class').crackerJack(true, true);
* Then in your stylesheet set the class you assign the plugin to position:relative.

The Crackerjack plugin is based on percentages so it automatically works on any sized image.

There are two parameters you can pass to modify the effect: the transparency and the sound arguments.

The arguments are booleans that allow you to them on and off.


* By setting both the first and second parameters to false, you are turning off the transparency and sound effect. $('your-div-class').crackerJack(false, false);

* By setting the first parameters to true, you are turning on the transparency effect. $('your-div-class').crackerJack(true, false);

* By setting the second parameters to true, you are turning on the sound effect. $('your-div-class').crackerJack(true, true);
