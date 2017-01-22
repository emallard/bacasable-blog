import * as Api from '../api'
import {IRoutable, AppelerWebService} from '../bacasable';

export class PageVoirArticle implements IRoutable<Api.Id>
{
    article: Api.Article;
    async construire(id:Api.Id)
    {
        this.article = await AppelerWebService(Api.ObtenirArticle, null);
    }
}