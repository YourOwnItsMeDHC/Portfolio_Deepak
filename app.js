//Control sections through their class names :
const sections = document.querySelectorAll('.section');          //all sections
const sectBtns = document.querySelectorAll('.controlls');        //all buttons
const sectBtn = document.querySelectorAll('.control');           //single button
const allSections = document.querySelectorAll('.main-content');   //body


function PageTransitions() {
    
    //Get rid of or ignore the buttons which are not active, just focus on the active button :
    //Change the colour of the button which is selected :
    for (let i = 0; i < sectBtn.length; i++) {
        //Whenever the ith button is clicked, listen the event           
        sectBtn[i].addEventListener('click', function () {
            //Current button or selected button will be active now
            let currentBtn = document.querySelectorAll('.active-btn');
            //From the class name of current button, which is selected, replace "active-btn" with an empty
            //string, so even if that same button is clicked again while being in that button, there is no need
            //for active
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            //"this" is referring to "PageTransitions()" function
            this.className += ' active-btn';                   //add that "active-btn" if another button is clicked
            //matlab ki "this" i.e "PageTransitions" function waapas se agar call hota hai to fir dusre control or //button ke liye "active-btn" class fir se laa dena hai 
        })
    }

    //Change sections depending on the active button :
    allSections[0].addEventListener('click', (e) =>{              //()=> is callback fuction , "e" is event
        //Whatever element or button is selected or targeted, take data-id of that, and use for referring to their //respective section
        const id = e.target.dataset.id;
        if(id) {                             //Something is there in "id"
            //Remove "active" functionality from all the section buttons, and include it only to targetted or
            //selected button :
            sectBtns.forEach ((btn)=>{
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            //Hide other sections i.e. show section/body part of only selected section :
            sections.forEach ((section)=>{
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });


    //Toggle Light/Dark Theme :
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;                 //Change "body" color, whenever button gets clicked/toggle

        //Whenever button gets click/toggle, a new class gets add in "body", which contains all the css properties needed to change the theme of whole body/website
        //When it's get click/toggle again, class=light-mode gets remove from "body"
        //When it gets click/toggle again, that class gets add again
        //and so on...
        element.classList.toggle('light-mode');
    });

}

//Call the function :
PageTransitions();




/////////////////////////////////////////////////////////////////////////////////////////////////////*
//Typing Animation :
var typed = new Typed(".typing", {
    strings : ["Web Developer", "Android Developer", "Blockchain Dev", "Youtuber"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});
//////////////////////////////////////////////////////////////////////////////////////////////////*/

