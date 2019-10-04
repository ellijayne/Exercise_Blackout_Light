/*
Use jQuery to turn the light on and off.

You will need to change the bulb image to reflect its state as well as the background color.

You will also need to update the text on the button.
*/

var light = true;

var lightOff = 'lightOff.png';
var lightOn = 'lightOn.png';

var switchText = 'light switch OFF';
var switchTextOn = 'light switch On';

var bodyColor = '#000';
var bodyColorOn = '#fff';

function updatePage() {

    if (light === true) {

    
        $('body').css('backgroundColor', bodyColor);
        $('#light').attr('src','images/' + lightOff);
        $('#light_switch').text(switchText);
        light = false;

    } else {

        $('body').css('backgroundColor', bodyColorOn);
        $('#light').attr('src', 'images/' + lightOn);
        $('#light_switch').text(switchTextOn);
        light = true;
    }
}

$('#light_switch').click(function() {
    updatePage();
    console.log('clicked!');
});