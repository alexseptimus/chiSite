

function switchcontent(event){
    var currentContent = document.getElementsByClassName("activePage");
    currentContent[0].className = currentContent[0].className.replace("activePage", "");
    var name = event.target.getAttribute("name");
    var contents = document.getElementsByClassName("sector");
    
   for (var i = 0; i < contents.length; i++) {
        var nameContent = contents[i].getAttribute("name");
        
        if(nameContent == name){
            contents[i].className +=" activePage";
            return true;
        }
    
    }
    return false;
}



