import * as B from '../bacasable';


export class ApplicationClient
{
    routeurClient:B.Routeur;
    routeurServeur:B.Routeur;
    navigateur:B.INavigateur;
    page:any;
    
    init(routeurClient:B.Routeur, routeurServeur:B.Routeur)
    {
        this.routeurClient = routeurClient;
        this.routeurServeur = routeurServeur;
    }

    async onload(navigateur:B.INavigateur)
    {
        this.navigateur = navigateur;
        var location = navigateur.location();
        if (location != undefined)
            this.page = await this.routeurClient.instancier(location);
    }
    
    LienVers<T>(c: {new(): T; }) : B.Lien<T>
    {
        return this.routeurClient.obtenirLien(c);
    }

    LienVers2<T extends B.IRoutable<U>, U>(type: {new(): T; }, parametres:U) : B.Redirection<T>
    {
        return this.routeurClient.obtenirLien2(type, parametres);
    }

    RedirigerVers<T>(c: {new(): T; }) : B.Redirection<T>
    {
        var lien = this.routeurClient.obtenirRedirection(c);
        this.navigateur.setlocation(lien.url)
        return lien;
    }

    RedirigerVers2<T extends B.IRoutable<U>, U>(type: {new(): T; }, parametres:U) : B.Redirection<T>
    {
        var redir = this.routeurClient.obtenirRedirection2<T, U>(type, parametres);
        this.navigateur.setlocation(redir.url)
        return redir;
    }

    
    AppelerWebService<T, U>(w:{new():B.WebService<T,U>}, t:T) : Promise<U>
    {
        var lien = this.routeurServeur.obtenirLien(w);
        return this.navigateur.appelerWebService(lien.url, t);
    }
    
}