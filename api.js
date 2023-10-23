

class LoadPicture{
    constructor(params){
        /**
         * @var {String} url url de l'api
         */
        this.url = params.url;
        this.area = params.area ?? '.photo';

        /**
         * @var {Element} areaDom zone du DOM où générer le slider : Objet du DOM
         */
        this.areaDom = null;
        /**
         * @var {Number} url nombre des photo
         */
        this.numberPhoto = params.numberPhoto ?? 10

       // this.loadingImage = null;
        this.createInterface()
        
        this.getUrl()



    }

    createInterface(){
        //on récupère la zone préfaite
        this.areaDom = document.querySelector(this.area);
        if (!this.areaDom) throw new Error(`SLIDER : la zone du DOM "${this.area}" n'existe pas dans le document HTML`);
        
        //on crée un div pour contenire 
        this.container = document.createElement('div');
        this.areaDom.appendChild(this.container);
        
             //on crée la div image  pour l'image sur chargement
        this.loadingImage = document.createElement('img');
        this.loadingImage.src = 'imageLoad';
        this.loadingImage.alt = 'Loading...';
        this.loadingImage.id = 'loadingImage';
        this.loadingImage.style.display = 'none'; // Masquer l'image de chargement par défaut
        this.areaDom.appendChild(this.loadingImage);
            
    }
        
        
    async getUrl(){ //récupère et lie l'url à la div image
        try{
            for (let i =0; i<this.numberPhoto ; i++){
                const id = i
                let responseImg = await fetch (`https://jsonplaceholder.typicode.com/photos?id=${id}`)
                let imgUrl =  await responseImg.json()
                let url = imgUrl[0]?.url;
                //création de la div image
                const imageElement = document.createElement('img');
                imageElement.src = url;
                imageElement.id = "load"
                this.container.appendChild(imageElement);
                //  this.hideLoadingImage();
            }

            //création du bouton
            this.buttonContainer = document.createElement('div');
            this.areaDom.appendChild(this.buttonContainer);
            
            this.suivant = document.createElement('button');
            this.suivant.innerHTML = 'suivant';
            this.buttonContainer.appendChild(this.suivant);
            this.suivant.addEventListener('click', () => this.getUrl10());
        }
        catch(e){
            console.error(`Une erreur s'est produite : ${e.message}`)
            //  this.hideLoadingImage();
        }
    }

    async getUrl10(){ //fonction qui se met en route avec le bouton
        try{
            for (let i =this.numberPhoto; i<(10+this.numberPhoto) ; i++){
                const id = i
                let responseImg = await fetch (`https://jsonplaceholder.typicode.com/photos?id=${id}`)
                let imgUrl =  await responseImg.json()
                let url = imgUrl[0]?.url;
                const imageElement = document.createElement('img');
                imageElement.src = url;
                imageElement.id = "load"
                this.container.appendChild(imageElement);
                //  this.hideLoadingImage();
                   

            }
               
            this.numberPhoto += 10;
        }
        catch(e){
            console.error(`Une erreur s'est produite : ${e.message}`)
            // this.hideLoadingImage();
        }
    } 
    
}
    
    
    
    const pictures = new LoadPicture({
        url: 'https://jsonplaceholder.typicode.com/photos',
        numberPhoto: 10,

    });

        