function tabExecuter() {
    class TabLink {
        constructor(tabElement) {
            this.tabElement = tabElement;
            this.tabData = this.tabElement.dataset.tab;

            if(this.tabData == "all") {
                this.blogs = document.querySelectorAll(".blog");
            } else {
                this.blogs = document.querySelectorAll(`.blog[data-tab="${this.tabData}"]`)
            }

            this.blogs = Array.from(this.blogs).map(item => new TabBlog(item))
            this.tabElement.addEventListener("click", () => this.selectTab());
        }

        selectTab(){
            const tabs = document.querySelectorAll(".tab");
            tabs.forEach(tab => tab.classList.remove("active-tab"));
            const blogs = document.querySelectorAll(".blog");
            blogs.forEach(blog => blog.style.display = "none")
            this.tabElement.classList.add("active-tab");
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


    var tabs = document.querySelectorAll(".tab").forEach(item => new TabLink(item))
};

tabExecuter(); // wrapping code with this function prevents syntax error