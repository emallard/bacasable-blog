import { ajouterRoute, IRoutable } from '../../bacasable/bacasable/routage';
import { inject } from '../../bacasable/bacasable/injection';
import { ApplicationClient } from '../../bacasable/bacasable/applicationClient';
import { Article, EnregistrerArticle, Id, ObtenirArticle } from '../api/articles';


export class PageModifierArticle implements IRoutable<Id>
{
    static route = ajouterRoute('/modifier/:id', PageModifierArticle);
        
    app = inject(ApplicationClient);

    //id:Api.Id;
    /*
    titre:string;
    date:Date;
    contenu:string;
    */

    article: Article;
    async construire(id:Id)
    {
        this.article = await this.app.AppelerWebService(ObtenirArticle, id);
    }

    async enregistrer()
    {
        await this.app.AppelerWebService(EnregistrerArticle, this.article);
    }
}