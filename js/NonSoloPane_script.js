    let count = 0;

    function menuAppear(){
                let menu = document.getElementById('menu');
                let line = document.getElementById('menuLine');
                if(count == 2){
                menu.style.marginLeft = "";
                count = 0;
                }
                count++;
                if (count % 2 == 0){
                    menu.style.animationName = 'hideMenu';
                    menu.classList.remove('show_menu');
                    line.style.zIndex = "1";
                    menu.style.zIndex = "0";
                    menu.addEventListener("animationend", () => {
                        menu.style.animationName = "";
                        menu.classList.add('hidden_menu');
                        menu.style.marginLeft = "-300px";
                       
                    })
                }
                else if(count%2 != 0){
                menu.style.animationName = 'showMenu';
                menu.classList.remove('hidden_menu');
                line.style.zIndex = "2";
                menu.style.zIndex = "1";
                    menu.addEventListener("animationend", () => {
                        menu.style.animationName = "";
                        menu.classList.add('show_menu');
                        menu.style.marginLeft = "-5px";
                        
                    })
                }
    }

    function stop_moving(){
            let inMenu = document.getElementById('MenuTitle');
            let ON = document.getElementById('MovingON');
            let OFF = document.getElementById('MovingOFF');

                ON.classList.add('hidden_moving_text');
                OFF.classList.remove('hidden_moving_text');
                inMenu.style.animationName = "none";
                inMenu.style.marginBottom = "-5px";
                inMenu.style.marginTop = "25px";
                inMenu.style.borderBottom = "1px dashed black";
                inMenu.style.borderTop = "1px dashed black";
                inMenu.style.borderRadius = "20px";
    }

    function resume_moving(){
            let inMenu = document.getElementById('MenuTitle');
            let ON = document.getElementById('MovingON');
            let OFF = document.getElementById('MovingOFF');
            
                OFF.classList.add('hidden_moving_text');
                ON.classList.remove('hidden_moving_text');
                inMenu.style.animationName = "InMenuTitleAnimation";
                inMenu.style.borderBottom = "none";
                inMenu.style.marginTop = "20px";
                inMenu.style.borderTop = "none";
                inMenu.style.marginBottom = "20px";
                inMenu.style.borderRadius = "0px";
    }
