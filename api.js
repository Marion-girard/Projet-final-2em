

class LoadPicture{
    constructor(params){
        this.url = params.url;
        this.area = params.area ?? '.photo';

        /**
         * @var {Element} areaDom zone du DOM où générer le slider : Objet du DOM
         */
        this.areaDom = null;

        this.numberPhoto = params.numberPhoto ?? 10

        this.createInterface()
        this.parcourir()
        



    }

    createInterface(){

        this.areaDom = document.querySelector(this.area);

        if (!this.areaDom)
        throw new Error(`SLIDER : la zone du DOM "${this.area}" n'existe pas dans le document HTML`)

        this.container = document.createElement('div');
        this.areaDom.appendChild(this.container);

        this.suivant = document.createElement('button');
        this.suivant.innerHTML = 'suivant';
        this.container.appendChild(this.suivant);
        this.suivant.addEventListener('click',() => this.parcourir10()); // exemple avec fonction fléchée (pas de changement de contexte) + appel de next
        
    
    }
    parcourir(){
        
        for (let i =0; i<this.numberPhoto ; i++){
            const id = i
            
            const url = `${this.url}?id=${id}`;
            
            // Récupérer les données de la photo
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou de réponse non valide');
                }
                return response.json();
            })
            .then(data => {
                const imageUrl = data[0].url; // Récupérer l'URL de l'image à partir des données
            
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                
                
                this.container.appendChild(imageElement);
                
                // Afficher l'URL de l'image dans la console et sur la page
                /*console.log("L'URL de l'image est : ", imageUrl);
                const urlElement = document.createElement('p');
                urlElement.textContent = `L'URL de l'image est : ${imageUrl}`;
                document.body.appendChild(urlElement);*/ // Ajoute l'élément au corps du document
                })
                .catch(error => console.error('Une erreur s\'est produite lors de la récupération des données de la photo', error));
        
                
        }
    }

    /*parcourirNuberPhoto(){
        console.log("10 de plus")
        for (let i = this.numberPhoto; i<this.numberPhoto ; i++){
            const id = i
            
            const url = `${this.url}?id=${id}`;
            
            // Récupérer les données de la photo
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou de réponse non valide');
                }
                return response.json();
            })
            .then(data => {
                const imageUrl = data[0].url; // Récupérer l'URL de l'image à partir des données
            
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                
                
                this.areaDom.appendChild(imageElement);
                */
                // Afficher l'URL de l'image dans la console et sur la page
                /*console.log("L'URL de l'image est : ", imageUrl);
                const urlElement = document.createElement('p');
                urlElement.textContent = `L'URL de l'image est : ${imageUrl}`;
                document.body.appendChild(urlElement);*/ // Ajoute l'élément au corps du document
               /* })
                .catch(error => console.error('Une erreur s\'est produite lors de la récupération des données de la photo', error));
        
                
            }
        }*/
    parcourir10(){
        for (let i =10; i<20 ; i++){
            const id = i
            
            const url = `https://jsonplaceholder.typicode.com/photos?id=${id}`;
            
            // Récupérer les données de la photo
            fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou de réponse non valide');
                }
                return response.json();
            })
            .then(data => {
                const imageUrl = data[0].url; // Récupérer l'URL de l'image à partir des données
            
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;
                this.container.appendChild(imageElement);
                /*const div = document.createElement("div")
                document.body.appendChild(div)
                div.appendChild(imageElement);*/
                
                // Afficher l'URL de l'image dans la console et sur la page
                /*console.log("L'URL de l'image est : ", imageUrl);
                const urlElement = document.createElement('p');
                urlElement.textContent = `L'URL de l'image est : ${imageUrl}`;
                document.body.appendChild(urlElement); // Ajoute l'élément au corps du document*/
                })
                .catch(error => console.error('Une erreur s\'est produite lors de la récupération des données de la photo', error));
        
                
        }
}
    }
    
    
        
        /*parcourir()
        
        suivant.addEventListener('click', parcourir10() 
            // Vous pouvez ajouter des actions à effectuer lorsque le bouton est cliqué ici
            );
        
        // Ajouter le bouton à la page
        document.body.appendChild(suivant);
        */
/*
        async function getUrl(){
            try{
                for (let i =0; i<10 ; i++){
                    const id = i
                    let responseImg = await fetch (`https://jsonplaceholder.typicode.com/photos?id=${id}`)
                    let imgUrl =  await responseImg.json()
                    console.log(imgUrl[0]?.url);
                }
            }
            catch(e){
                console.error(`Une erreur s'est produite : ${e.message}`)
            }
        }
        getUrl()*/
        const pictures = new LoadPicture({
            url: 'https://jsonplaceholder.typicode.com/photos',
            numberPhoto: 10,
            
            

        });
