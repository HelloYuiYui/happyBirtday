function getParams() {
    console.log(name, colour);
    
    /*
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
         if (xhr.readyState==4 && xhr.status==200){
             var resp = xhr.responseText.split('_');
             var name = resp[0];
             var colour = resp[1];
             personalise(name, colour);
         }
    };
        
    xhr.open("GET", "/" + name + "_" + colour);
    xhr.send();
    */
    
    //document.getElementById("name").innerHTML = '<i class="fa fa-birthday-cake"></i> Happy Birthday ' + (decodeURI(name)) + ' <i class="fa fa-birthday-cake"></i>';
    //document.getElementsByTagName("body")[0].style.backgroundColor = "#" + colour;
    
}

function personalise(n, c){
    if (name.indexOf("+") > -1) {
        name = name.split("+").join(" ");
    }
    document.getElementById("name").innerHTML = '<i class="fa fa-birthday-cake"></i> Happy Birthday ' + (decodeURI(n)) + ' <i class="fa fa-birthday-cake"></i>';
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + c;
}

function nav(){
    var c = document.getElementById("favcolor").value.slice(1);
    var n = document.getElementById("name").value.split(" ").join("+");
    location.replace(n + "_" c);
}

// location.replace((document.getElementById('name').value.split('').join('+')), (document.getElementById('favcolor').value.slice(1)))