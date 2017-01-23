import {LienVers, Redirection, AppelerWebService, RedirigerVers, RedirigerVers2} from '../bacasable';
import * as Api from '../api';
import {PageModifierArticle} from '../client'


export class PageAccueil
{
    constructor()
    {
    }

    async ajouterUnArticle() : Promise<Redirection<PageModifierArticle>>
    {
        var article = new Api.Article();
        var id = await AppelerWebService(Api.AjouterArticle, article);
        var redirection = RedirigerVers2(PageModifierArticle, id);
        return redirection;
    }

/*
    afficherRecents()
    {

    }
*/
        
}

