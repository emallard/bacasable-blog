import * as B from '../bacasable';


export class BacASable
{
    internet = B.inject(B.InternetBacASable);
    navigateur = B.inject(B.NavigateurBacASable);
    serveur = B.inject(B.ServeurBacASable);
    applicationServeur = B.inject(B.ApplicationServeur);
    applicationClient = B.inject(B.ApplicationClient);
    
    async initialiser()
    {
        await this.navigateur.charger(this.applicationClient);
        
/*
        // code à rajouter dans le navigateur
        var appClient = new ApplicationClient(
                new MonRouteurClient(),
                new MonRouteurServeur());
        appClient.onload(navigateur); 

        // code à rajouter dans Node
        var appServeur = new ApplicationServeur(
            new MonRouteurServeur()
        );
        appClient.setServeur(serveur);  
*/
    }

    logSuivre : (url:string)=>void = (url)=>{};
    logPage : (page:any)=>void = (page)=>{};
    logAppel : (url:any, parameters:any)=>void = (url:any, parameters:any)=>{};
    logReponse : (reponse:any, url:any, parameters:any)=>void = (reponse:any, url:any, parameters:any)=>{};
}







