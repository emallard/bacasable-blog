import * as B from '../bacasable';

export class ServeurBacASable
{
    applicationServeur = B.inject(B.ApplicationServeur);

    recevoir(url:string, parameters:any):any
    {
        return this.applicationServeur.recevoir(url, parameters);
    }

    async recevoirAsync(url:string, parameters:any):Promise<any>
    {
        return await this.applicationServeur.recevoir(url, parameters);
    }
}