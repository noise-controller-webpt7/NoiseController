class Dropdown {
    constructor(element) {
      
      this.element = element;
      
      this.button = element.querySelector(".line1");
     
      this.button.style.color="#DECEB6";
      this.button.style.fontSize="3rem";
      this.button.style.position="fixed";
      this.button.style.right="10%";
      
      this.content = document.querySelector(".dropdown-content");
      
      this.button.addEventListener('click', () =>{
        this.toggleContent();
      })
    }  
  
    toggleContent() {
      
      this.content.classList.toggle("dropdown-hidden");
      
    }
  }
  
document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

