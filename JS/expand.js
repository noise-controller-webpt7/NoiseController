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

class Expand {
    constructor(elm) {
    this.elm = elm;
    console.log(elm);
    //this.button = elm.querySelector('.expand');
    this.article = elm.querySelector('.article')
    console.log(this.article)
    this.elm.addEventListener('click', () =>{
        this.revealExpander();
    });

}

    revealExpander() {
        this.article.classList.toggle('hidden');
        console.log("toggle")
    }
}

let revealer = document.querySelectorAll('.blog');

revealer.forEach(icon => {
    new Expand(icon);
});