let count = 0;


function menuAppear(){
    let menu = document.getElementById('menu');
    if(count == 2){
    menu.style.marginLeft = "";
    count = 0;
    }

    count++;
    if (count % 2 == 0){
        menu.style.animationName = 'hideMenu';
        menu.classList.remove('show_menu');
        menu.addEventListener("animationend", () => {
            menu.style.animationName = "";
            menu.classList.add('hidden_menu');
            menu.style.marginLeft = "-250px";
        })
    }
    else if(count%2 != 0){
    menu.style.animationName = 'showMenu';
    menu.classList.remove('hidden_menu');
        menu.addEventListener("animationend", () => {
            menu.style.animationName = "";
            menu.classList.add('show_menu');
            menu.style.marginLeft = "0px";
        })
    }
}



function showcontact(){
    let div = document.getElementById('contact');
    let image = document.getElementById('logo');
    let AnimatedText = document.getElementById('special');

        if(div.classList == 'hidden_contact'){
        image.classList.add('ClassLogoMargin');
        div.classList.remove('hidden_contact');
        div.classList.add('showContact');
        }
        else if (div.classList == 'showContact'){
            image.classList.remove('ClassLogoMargin');
            div.classList.remove('showContact');
            div.classList.add('hidden_contact');
        }
    }

    
    function stop_moving(){
        let AnimatedText = document.getElementById('special');
        let ON = document.getElementById('MovingON');
        let OFF = document.getElementById('MovingOFF');

            ON.classList.remove('show');
            ON.classList.add('hidden');
            OFF.classList.add('show');
            OFF.classList.remove('hidden');
            AnimatedText.style.animationPlayState = "paused";
    }

    function resume_moving(){
        let AnimatedText = document.getElementById('special');
        let ON = document.getElementById('MovingON');
        let OFF = document.getElementById('MovingOFF');
        
            OFF.classList.remove('show');
            OFF.classList.add('hidden');
            ON.classList.add('show');
            ON.classList.remove('hidden');
            AnimatedText.style.animationPlayState = "running";
    }
