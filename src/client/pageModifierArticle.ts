import * as Api from '../api'
import {IRoutable, AppelerWebService} from '../bacasable';

export class PageModifierArticle implements IRoutable<Api.Id>
{
    //id:Api.Id;
    /*
    titre:string;
    date:Date;
    contenu:string;
    */

    article: Api.Article;
    async construire(id:Api.Id)
    {
        this.article = await AppelerWebService(Api.ObtenirArticle, id);
    }

    async enregistrer()
    {
        await AppelerWebService(Api.EnregistrerArticle, this.article);
    }
}