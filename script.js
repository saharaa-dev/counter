let count = 0;

function increase(){
    count = count + 1;
    document.getElementById("countplace").innerHTML=count;
}

function decrement(){
    if(count===0){
        alert("Nothing to Decrease 😵!")
    }else{
        count = count-1;
        document.getElementById("countplace").innerHTML=count;
    }
}

function reset(){
    count = 0;
    document.getElementById("countplace").innerHTML=count;
    // alert("Reset done 👍")
}