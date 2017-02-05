import { Article, Id, ObtenirArticle } from '../api/articles';
import { ajouterRoute, IRoutable } from '../bacasable/routage';
import { inject } from '../bacasable/injection';
import { ApplicationClient } from '../bacasable/applicationClient';

export class PageVoirArticle implements IRoutable<Id>
{
    static route = ajouterRoute('/article/:id', PageVoirArticle);
        
    app = inject(ApplicationClient);
    article: Article;
    async construire(id:Id)
    {
        this.article = await this.app.AppelerWebService(ObtenirArticle, id);
    }
}