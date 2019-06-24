class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
        console.log(this.tabData)

        if(this.tabData == "all") {
            this.blogs = document.querySelectorAll(".blog");
        } else {
            this.blogs = document.querySelectorAll(`.blog[data-tab="${this.tabData}"]`) // selects the blogs with the same data-tab
        }

        this.blogs = Array.from(this.blogs).map(item => new TabBlog(item))
        this.tabElement.addEventListener("click", () => this.selectTab());
    }

    selectTab(){
        let tabs = document.querySelectorAll(".tab");
        //tabs.forEach(tab => tab.classList.remove("active-tab"));
        let blogs = document.querySelectorAll(".blog");
        blogs.forEach(blog => blog.style.display = "none")
        //this.tabElement.classList.add("active-tab");
        this.blogs.forEach(blog => blog.selectBlog());
    }
}

class TabBlog {
    constructor(blogElement) {
        this.blogElement = blogElement;
    }

    selectBlog() {
    this.blogElement.style.display = "block";
    }
}


let tabs = document.querySelectorAll(".tab").forEach(item => new TabLink(item))