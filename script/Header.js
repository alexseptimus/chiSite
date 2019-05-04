
function displaymenu(){
    if(unresizable()) return false;
    var x = document.getElementById("drop");
    if(x.style.display == "block"){
        x.style.display = "none";
    }else{
        x.style.display ="block"; 
    }
}
function unresizable(){
    return (getResolutionX() <= screen.width) ? true : false;
}
function getResolutionX(){
    var
    w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    return x;
}
function getResolutionY(){
    var
    w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return y;
}


    var header = document.getElementById("drop");
    var btns = document.getElementsByClassName("option");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
    }

