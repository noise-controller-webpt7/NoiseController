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