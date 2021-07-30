var c,d;

function out_bound(){
    var i = 0;
    var a = true; // downward
    c = window.setInterval(function(){
        if(a){
            if(i < 33){
                teleport(0,++i,"new_project_room_4"); // change this 
            }else if (i >= 33){
                a = false;
                i = 33;
            }
        }else{
            if(i > 0){
                teleport(0,--i,"new_project_room_4"); // change this 
            }else if (i <= 0){
                a = true;
                i = 0;
            }
        }
    },100);
}

function random_walk(){
    d = window.setInterval(function(){
        x = Math.floor(Math.random()*28) + 1; // change this to x max
        y = Math.floor(Math.random()*34) + 1; // change this to y max
        console.log("" + x + "," + y);
        teleport(x,y,"new_project_room_4"); // change this 
    },100);
}

function stop(){
    window.clearInterval(c);
    window.clearInterval(d);
}
