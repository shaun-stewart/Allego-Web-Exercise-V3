 
class Dialog  {
    constructor (header, content) {
        let mainContent = document.querySelector(".dialog-main");
        let dialogEl = document.querySelector(".dialog");
        let closeBtn = document.querySelector(".dialog-close-btn");
        let headerContent = document.querySelector(".dialog-header");

        if(header){
            headerContent.innerHTML = header;
        }

        if(content){
            mainContent.innerHTML = content;
        }
        
        this.replaceContent = (content)=>{
            (mainContent.firstChild !== null) ?
                mainContent.firstChild.replaceWith(content) : mainContent.append(content);        
        }

        this.open = () => {
            dialogEl.style.display = "block"
        }
        
        this.close= () =>{
            dialogEl.style.display = "none"
        }

        
    
        closeBtn.onclick = this.close.bind(this);
    }

   

    
    
 }
 


export default Dialog;




