import {inject, ApplicationClient, Redirection} from '../bacasable';
import * as Api from '../api';
import {PageModifierArticle} from '../client'


export class PageAccueil
{
    app = inject(ApplicationClient);
    constructor()
    {
    }

    async ajouterUnArticle() : Promise<Redirection<PageModifierArticle>>
    {
        console.log("ajouterUnArticle");
        var article = new Api.Article();
        var id = await this.app.AppelerWebService(Api.AjouterArticle, article);
        var redirection = this.app.RedirigerVers2(PageModifierArticle, id);
        return redirection;
    }

/*
    afficherRecents()
    {

    }
*/
        
}

