function mouseOverKlee(){
    document.getElementById('char').style.backgroundImage = "url('pictures/ezgif.com-gif-maker (3).gif')";
}

function mouseOverDiona(){
    document.getElementById('char').style.backgroundImage = "url('pictures/ezgif.com-gif-maker (5).gif')";
}

function mouseOverSayu(){
    document.getElementById('char').style.backgroundImage = "url('pictures/ezgif.com-gif-maker (4).gif')";
}

function mouseOutChar(){
    document.getElementById('char').style.backgroundImage = "url('pictures/inazuma_loading_screen__fan_made__by_x3r0x4yuk1_dehwfe7-pre.jpg')";
}

document.getElementById('char').style.backgroundImage = "url('C:/Users/User/Downloads/inazuma_loading_screen__fan_made__by_x3r0x4yuk1_dehwfe7-pre.jpg')";
document.getElementById('klee').onmouseover = function() {mouseOverKlee()};
document.getElementById('klee').onmouseout = function() {mouseOutChar()};

document.getElementById('diona').onmouseover = function() {mouseOverDiona()};
document.getElementById('diona').onmouseout = function() {mouseOutChar()};

document.getElementById('sayu').onmouseover = function() {mouseOverSayu()};
document.getElementById('sayu').onmouseout = function() {mouseOutChar()};