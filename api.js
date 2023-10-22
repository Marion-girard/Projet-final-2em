

    function parcourir(){
        for (let i =0; i<10 ; i++){
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
                ;
                const div = document.createElement("div")
                document.body.appendChild(div)
                div.appendChild(imageElement);
                
                // Afficher l'URL de l'image dans la console et sur la page
                console.log("L'URL de l'image est : ", imageUrl);
                const urlElement = document.createElement('p');
                urlElement.textContent = `L'URL de l'image est : ${imageUrl}`;
                document.body.appendChild(urlElement); // Ajoute l'élément au corps du document
                })
                .catch(error => console.error('Une erreur s\'est produite lors de la récupération des données de la photo', error));
        
                
        }
    }
        
        parcourir()
        
        const suivant = document.createElement('button');
        suivant.innerHTML = 'suivant';
        suivant.addEventListener('click', parcourir10() 
            // Vous pouvez ajouter des actions à effectuer lorsque le bouton est cliqué ici
            );
        
        // Ajouter le bouton à la page
        document.body.appendChild(suivant);
        
        function parcourir10(){
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
                    ;
                    const div = document.createElement("div")
                    document.body.appendChild(div)
                    div.appendChild(imageElement);
                    
                    // Afficher l'URL de l'image dans la console et sur la page
                    console.log("L'URL de l'image est : ", imageUrl);
                    const urlElement = document.createElement('p');
                    urlElement.textContent = `L'URL de l'image est : ${imageUrl}`;
                    document.body.appendChild(urlElement); // Ajoute l'élément au corps du document
                    })
                    .catch(error => console.error('Une erreur s\'est produite lors de la récupération des données de la photo', error));
            
                    
            }
        }

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
        getUrl()