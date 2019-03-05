function getParams() {
    var desire = location.search.slice(1).split("&");//[0];//.split("=");
    var colour = desire[0].split("=")[1];
    var name = desire[1].split("=")[1];
    if (name.indexOf("+") > -1) {
        var name = name.split("+").join(" ");
    }
    document.getElementById("name").innerHTML = '<i class="fa fa-birthday-cake"></i> Happy Birthday ' + name + ' <i class="fa fa-birthday-cake"></i>';
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + colour;
}

function nav(){
    var c = document.getElementById("favcolor").value.slice(1);
    var n = document.getElementById("name").value.split(" ").join("+");
    window.location = ("message.html?c=" + c + "&n=" + n);
}