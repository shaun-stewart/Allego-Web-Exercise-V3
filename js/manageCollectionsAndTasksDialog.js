 
import Dialog from "./dialog.js";
import {sleep} from "./sleep.js";


class ManageCollectionsAndTasksDialog extends Dialog  {

    constructor () {   
        super("Manage collections and tasks");
        this.replaceContent(this.getInitalContent());
    }


    getInitalContent = () => {
        let div = document.createElement('div');
        let processBtn = document.createElement('button');
        processBtn.id = "processBtn";
        processBtn.onclick = this.processBtnClickHandler.bind(this);
        processBtn.textContent = "process";
        div.appendChild(processBtn);
        return div;
    }

    async processBtnClickHandler () {
        let loadingAnim = document.createElement('i');
        let classesToAdd = [ 'fa', 'fa-circle-o-notch', 'fa-spin' ];
        loadingAnim.classList.add(...classesToAdd);

         // hide the button, show a loading animation
        this.replaceContent(loadingAnim);
    
        await sleep(3000);
    
        //  and then show the final text content.
        const content = this.loadContent();
        let div = document.createElement('div');
        div.innerHTML = content;
        this.replaceContent(div);
    }



     loadContent = () => {
        const calculateTotal = () => {
            const total = Number("3");
            return total;
        };
        let content = "<div><span>";
        const loaded = 3;
        const total = calculateTotal();
        for(let i = 0; i < loaded; i++){
            content += "<h2>Test " + i + "</h2>";
        }
        const results = loaded == total ? "<h3>Loaded all items.</h3>" : "<h3>Failed to load all items.</h3>";
        content += results + "<span><div>";
        return content;
    }

    close = ()=>{
        super.close();
        this.replaceContent(this.getInitalContent());
    }
    
 }
 


export default ManageCollectionsAndTasksDialog;




