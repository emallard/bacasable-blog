import * as Api from '../api'
import {IRoutable, ApplicationClient, inject} from '../bacasable';

export class PageVoirArticle implements IRoutable<Api.Id>
{
    app = inject(ApplicationClient);
    article: Api.Article;
    async construire(id:Api.Id)
    {
        this.article = await this.app.AppelerWebService(Api.ObtenirArticle, id);
    }
}