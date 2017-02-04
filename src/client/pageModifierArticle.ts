import * as Api from '../api'
import {inject, ApplicationClient, Redirection, IRoutable} from '../bacasable';

export class PageModifierArticle implements IRoutable<Api.Id>
{
    app = inject(ApplicationClient);

    //id:Api.Id;
    /*
    titre:string;
    date:Date;
    contenu:string;
    */

    article: Api.Article;
    async construire(id:Api.Id)
    {
        this.article = await this.app.AppelerWebService(Api.ObtenirArticle, id);
    }

    async enregistrer()
    {
        await this.app.AppelerWebService(Api.EnregistrerArticle, this.article);
    }
}