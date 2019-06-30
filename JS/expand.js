// const collapse = document.getElementsByClassName('expand');
// var e;

// for (e = 0; e < collapse.length; e++) {
//     collapse[e].addEventListener('click', function() {
//         this.classList.toggle('active');
//         var reveal = document.getElementsByClassName('reveal');
//         console.log(reveal);


//         if ( reveal.style.display === "block") {
//             reveal.style.display = none;
//         } else {
//             reveal.style.display = "block";
//         }
//     })

// };

class Expander {
    constructor(elm) {
    this.elm = elm;

    this.revealButton = elm.querySelector('expand') ;

    this.revealButton.addEventListener('click', () =>{
        this.revealExpander();
      });

}

    revealExpander() {
        this.elm.classList.toggle('reveal');
    }
}

let revealer = document.querySelectorAll('social-media');

revealer.forEach(icon => {
    new Expander(icon);
});