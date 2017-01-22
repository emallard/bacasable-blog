import {BacASable, InternetBacASable, ApplicationServeur} from '../bacasable'


export class ServeurBacASable
{
    bacasable:BacASable;
    internet:InternetBacASable;
    applicationServeur:ApplicationServeur;

    setBacASable(bacasable:BacASable)
    {
        this.bacasable = bacasable;
    }

    setInternet(internet:InternetBacASable)
    {
        this.internet = internet;
    }

    charger(applicationServeur:ApplicationServeur):void
    {
        this.applicationServeur = applicationServeur;
    }

    recevoir(url:string, parameters:any):any
    {
        return this.applicationServeur.recevoir(url, parameters);
    }

    recevoirAsync(url:string, parameters:any):Promise<any>
    {
        return this.applicationServeur.recevoir(url, parameters);
    }
}