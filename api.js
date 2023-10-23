

class LoadPicture{
    constructor(params){
        this.url = params.url;
        this.area = params.area ?? '.photo';

        /**
         * @var {Element} areaDom zone du DOM où générer le slider : Objet du DOM
         */
        this.areaDom = null;

        this.numberPhoto = params.numberPhoto ?? 10

        this.loadingImage = null;
        this.createInterface()
        
        this.getUrl()



    }

    createInterface(){

            this.areaDom = document.querySelector(this.area);
            if (!this.areaDom) throw new Error(`SLIDER : la zone du DOM "${this.area}" n'existe pas dans le document HTML`);
        
            this.container = document.createElement('div');
            this.areaDom.appendChild(this.container);
        
            this.loadingImage = document.createElement('img');
            this.loadingImage.src = 'imageLoad';
            this.loadingImage.alt = 'Loading...';
            this.loadingImage.id = 'loadingImage';
            this.loadingImage.style.display = 'none'; // Masquer l'image de chargement par défaut
            this.areaDom.appendChild(this.loadingImage);
            
        }
        
        showLoadingImage() {
            this.loadingImage.style.display = 'block';
        }
    
        hideLoadingImage() {
            this.loadingImage.style.display = 'none';
        }
        async getUrl(){
            try{
                for (let i =0; i<this.numberPhoto ; i++){
                    const id = i
                    let responseImg = await fetch (`https://jsonplaceholder.typicode.com/photos?id=${id}`)
                    let imgUrl =  await responseImg.json()
                    let url = imgUrl[0]?.url;
                    const imageElement = document.createElement('img');
                    imageElement.src = url;
                    this.container.appendChild(imageElement);
                    this.hideLoadingImage();
                }
                this.buttonContainer = document.createElement('div');
                this.areaDom.appendChild(this.buttonContainer);
            
                this.suivant = document.createElement('button');
                this.suivant.innerHTML = 'suivant';
                this.buttonContainer.appendChild(this.suivant);
                this.suivant.addEventListener('click', () => this.getUrl10());
            }
            catch(e){
                console.error(`Une erreur s'est produite : ${e.message}`)
                this.hideLoadingImage();
            }
        }

        async getUrl10(){
            try{
                for (let i =this.numberPhoto; i<(10+this.numberPhoto) ; i++){
                    const id = i
                    let responseImg = await fetch (`https://jsonplaceholder.typicode.com/photos?id=${id}`)
                    let imgUrl =  await responseImg.json()
                    let url = imgUrl[0]?.url;
                    const imageElement = document.createElement('img');
                    imageElement.src = url;
                    this.container.appendChild(imageElement);
                    this.hideLoadingImage();


                }
                this.buttonContainer = document.createElement('div');
                this.areaDom.appendChild(this.buttonContainer);
            
                this.suivant = document.createElement('button');
                this.suivant.innerHTML = 'suivant';
                this.buttonContainer.appendChild(this.suivant);
                this.suivant.addEventListener('click', () => this.getUrl10());
            }
            catch(e){
                console.error(`Une erreur s'est produite : ${e.message}`)
                this.hideLoadingImage();
            }
        }

        async getUrl20(){
            try{
                for (let i =(this.numberPhoto+10); i<(20+this.numberPhoto) ; i++){
                    const id = i
                    let responseImg = await fetch (`https://jsonplaceholder.typicode.com/photos?id=${id}`)
                    let imgUrl =  await responseImg.json()
                    let url = imgUrl[0]?.url;
                    const imageElement = document.createElement('img');
                    imageElement.src = url;
                    this.container.appendChild(imageElement);


                }
                this.buttonContainer = document.createElement('div');
                this.areaDom.appendChild(this.buttonContainer);
            
                this.suivant = document.createElement('button');
                this.suivant.innerHTML = 'suivant';
                this.buttonContainer.appendChild(this.suivant);
                this.suivant.addEventListener('click', () => this.getUrl10());
            }
            catch(e){
                console.error(`Une erreur s'est produite : ${e.message}`)
            }
        }
   
    
    
}
    
    
    
        const pictures = new LoadPicture({
            url: 'https://jsonplaceholder.typicode.com/photos',
            numberPhoto: 10,
            
            

        });

        