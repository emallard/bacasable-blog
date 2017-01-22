import {INavigateur, BacASable, InternetBacASable, ApplicationClient, Lien, Redirection, WebService} from '../bacasable'

export class NavigateurBacASable implements INavigateur
{
    bacasable:BacASable;
    internet:InternetBacASable;
    applicationClient:ApplicationClient;

    _location:string;
    page:any;

    setBacASable(bacasable:BacASable)
    {
        this.bacasable = bacasable;
    }

    setInternet(internet:InternetBacASable)
    {
        this.internet = internet;
    }

    async charger(applicationClient:ApplicationClient)
    {
        this.applicationClient = applicationClient;
        await this.applicationClient.onload(this);
    }

    changerPage(page:any):any
    {
        this.bacasable.logPage(page);
        this.page = page;
        return page;
    }

    async suivreLien<T>(lien: Lien<T>) : Promise<T>
    {
        this.bacasable.logSuivre(lien.url);
        this._location = lien.url;
        await this.applicationClient.onload(this);
        return this.changerPage(this.applicationClient.page);
    }

    async suivre<T>(redirection: Redirection<T>) : Promise<T>
    {
        this.bacasable.logSuivre(redirection.url);
        this._location = redirection.url;
        await this.applicationClient.onload(this);
        //var page = new redirection.type();
        return this.changerPage(this.applicationClient.page);
    }

    /*
    suivre<T>(redirection: Redirection<T>) : T
    {
    }
    */
    /*
    executer<T>(f : () => Lien<T>) : T
    {
        var lien = f();
        var page = new lien.create();
        return page;
    }*/

    changerAdresse(_url:string)
    {
        this._location = _url; 
    }

    location() { return this._location; }
    setlocation(location:string) {this._location = location}

    appelerWebService(url:string, parameters:any) : Promise<any>
    {
        return this.internet.envoyerAsync(url, parameters);
    }
}