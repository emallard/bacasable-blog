import * as B from '../bacasable';


export class BacASable
{
    applicationServeur:B.ApplicationServeur;
    applicationClient:B.ApplicationClient;
    navigateur:B.NavigateurBacASable;
    internet:B.InternetBacASable;

    async creer(
        applicationClient:B.ApplicationClient,
        applicationServeur:B.ApplicationServeur)
    {
        this.applicationClient = applicationClient;
        this.applicationServeur = applicationServeur;
        
        this.internet = new B.InternetBacASable();
        this.internet.setBacASable(this);
        
        this.navigateur = new B.NavigateurBacASable();
        this.navigateur.setBacASable(this);
        this.navigateur.setInternet(this.internet);

        var serveur = new B.ServeurBacASable();
        serveur.setBacASable(this);
        serveur.setInternet(this.internet);
        serveur.charger(this.applicationServeur);
        this.internet.setServeur(serveur);

        B.Kernel.navigateur = this.navigateur;
        B.Kernel.applicationClient = this.applicationClient;

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







