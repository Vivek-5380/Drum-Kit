for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {

        var button_pressed = this.innerHTML;
        
        makeSound(button_pressed);

        buttonAnimation(button_pressed);
        
    });;
}


document.addEventListener("keypress",function (event){
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio_w = new Audio("/sounds/tom-1.mp3");
            audio_w.play();
            break;

        case "a":
            var audio_a = new Audio("/sounds/tom-2.mp3");
            audio_a.play();
            break;

        case "s":
            var audio_s = new Audio("/sounds/tom-3.mp3");
            audio_s.play();
            break;

        case "d":
            var audio_d = new Audio("/sounds/tom-4.mp3");
            audio_d.play();
            break;

        case "j":
            var audio_j = new Audio("/sounds/snare.mp3");
            audio_j.play();
            break;

        case "k":
            var audio_k = new Audio("/sounds/crash.mp3");
            audio_k.play();
            break;

        case "l":
            var audio_l = new Audio("/sounds/kick-base.mp3");
            audio_l.play();
            break;

        default:
            break;
    }

}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}



