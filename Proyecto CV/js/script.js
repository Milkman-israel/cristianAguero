let bigote = document.getElementsByClassName("puntero");

document.onmousemove = function() {
    let x=event.clientX*105/window.innerWidth + "%";
    let y=event.clientY*95/window.innerHeight + "%"; 

    for(let i=0; i<2;i++) {
        bigote[i].style.left=x;
        bigote[i].style.top=y;
        bigote[i].style.transform="translate(-"+x+",-"+y+")";
    }
}