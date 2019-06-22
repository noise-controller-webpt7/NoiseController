class TabLink {
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
        console.log(this.tabData)

        if(this.tabData == "all") {
            this.blogs = document.querySelectorAll(".blog");
        } else {
            this.blogs = document.querySelectorAll(`.blog[data-tab="${this.tabData}"]`) // selects the blogs with the same data-tab
        }

        this.blogs = Array.from(this.blogs).map(item => console.log(item))
    }
}


let tabs = document.querySelectorAll(".tab").forEach(item => new TabLink(item))