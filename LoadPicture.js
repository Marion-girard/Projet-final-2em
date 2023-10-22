/*class LoadPicture {
    constructor(params) {
        this.url = params.url;
        this.area = params.area ?? '.photo';
        this.areaDom = null;
        this.numberPhoto = params.numberPhoto ?? 10;
        this.createInterface(); // Correction de la faute de frappe ici
    }

    createInterface() { // Correction de la faute de frappe ici
        this.areaDom = document.querySelector(this.area);
        this.divSlider = document.createElement('div');
        this.divSlider.classList.add('photo-content');
        this.btnmore = document.createElement('button');
        
        this.divSlider.append(this.btnmore);
        this.areaDom.appendChild(this.divSlider); // Correction faite ici
        console.log("bouh");
    }
}*/

class LoadPicture {
    
    constructor(params) {

        /** 
         * @var {String} url
         */
        this.url = params.url;

        
        /**
         * @var {Element} currentImage image courante (element du DOM)
         */
        this.currentImage = new Image();


        /**
         * @var {String} area zone du DOM où générer le slider (selecteur css)
         */
        this.area = params.area ?? '.photo';


        /**
         * @var {Element} areaDom zone du DOM où générer le slider : Objet du DOM
         */
        this.areaDom = null;

        
        /**
        * @var {Number} numberPhoto du timer play
        */
        this.numberPhoto = params.numberPhoto ?? 10;
        
            
        this.createInterface();
        
        
        

    }
    
    /**
     * Créer l'interface du SLIDER
     * @param {void}
     */
    createInterface() {
        
        // On regarde si la Zone du dom existe
        this.areaDom = document.querySelector(this.area);

        if (!this.areaDom)
        throw new Error(`SLIDER : la zone du DOM "${this.area}" n'existe pas dans le document HTML`)
    

        // on créé le contenant du slider (div avec la classe slider-content)
        this.divSlider = document.createElement('div');
        this.divSlider.classList.add('slider-content');
        

        // On créé le bouton next
        this.btnmore = document.createElement('button');
        this.btnmore.classList.add('more');
        this.btnmore.innerHTML = 'plus';
        

        

        // On ajoute tout ça à la div content du SLIDER
        this.divSlider.append(this.btnmore, this.btnPrev, this.currentImage);

        // On ajoute tout ça dans le DOM dans l'area proposée
        this.areaDom.appendChild(this.divSlider);

        // On met à jour l'image 
        this.updateImage();
    }

    
    /**
     * Image suivante
    */
    /*
    next() {
        console.log(this)
        this.indexCurrentImage++;
        if (this.indexCurrentImage > this.images.length-1)
        this.indexCurrentImage = 0;
    
        
        this.updateImage();
    }
    */
   /**
    * Image précédente
   */
    /*
    previous() {
        this.indexCurrentImage--;
        if (this.indexCurrentImage < 0)
            this.indexCurrentImage = this.images.length -1;

        this.updateImage();
        
    }
    */
   /**
     * Mise à jour de l'image dans le DOM
     */
    /*
    updateImage() {   
        this.currentImage.src = this.images[this.indexCurrentImage].src;
        this.currentImage.title = this.images[this.indexCurrentImage].title;
        
        this.currentImage.onerror = ()=> {
            throw new Error(`Image impossible à charger ${this.images[this.indexCurrentImage].src}`)
        }
    }
    */
   /**
    * Affichage des erreurs
   */
   /*
   displayError(e){
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        
        errorDiv.textContent = e.toString();
        
        document.body.prepend(errorDiv);
    }
 */
}
const pictures = new LoadPicture({
    url: 'https://jsonplaceholder.typicode.com/photos',
    area: 'main section.photo',
    numberPhoto: 20,
});
