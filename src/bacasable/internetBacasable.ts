import {BacASable, ServeurBacASable} from '../bacasable';

export class InternetBacASable
{
    serveur:ServeurBacASable;
    bacasable:BacASable;

    setBacASable(bacasable:BacASable)
    {
        this.bacasable = bacasable;
    }
    setServeur(serveur:ServeurBacASable)
    {
        this.serveur = serveur;
    }

    envoyer(url:string, parameters:any, succes:(reponse:any)=>void) : any
    {
        var reponse = this.serveur.recevoir(url, parameters);
        if (succes != null)
            succes(reponse);
    }

    async envoyerAsync(url:string, parameters:any) : Promise<any>
    {
        this.bacasable.logAppel(url, parameters);
        var reponse = await this.serveur.recevoirAsync(url, parameters);
        this.bacasable.logReponse(reponse, url, parameters);
        return reponse;
    }
}