//homepage
function mouseOverCharacter(){
    document.getElementById('picture').style.backgroundImage = "url('pictures/ezgif.com-gif-maker.gif')";
}

function mouseOverArtifacts(){
    document.getElementById('picture').style.backgroundImage = "url('pictures/ezgif.com-gif-maker (1).gif')";
}

function mouseOut(){
    document.getElementById('picture').style.backgroundImage = "url('pictures/397d4b7de37cc4487d531e1938a344b0.gif')";
}

document.getElementById('picture').style.backgroundImage = "url('pictures/397d4b7de37cc4487d531e1938a344b0.gif')";

document.getElementById('CH').onmouseover = function() {mouseOverCharacter()};
document.getElementById('CH').onmouseout = function() {mouseOut()};

document.getElementById('Art').onmouseover = function() {mouseOverArtifacts()};
document.getElementById('Art').onmouseout = function() {mouseOut()};
