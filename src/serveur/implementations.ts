
import * as Api from '../api'
import {LokiPersistance} from '../bacasable/persistanceLoki';

export class DerniersArticlesImpl extends Api.DerniersArticles
{
    async executer(i:Api.DerniersArticlesIn) : Promise<Api.DerniersArticlesOut>
    {
        var res = new Api.DerniersArticlesOut();
        res.articles = [];
        res.articles.push({id: "123456", titre:'titre', auteur:'auteur', contenu:'contenu'})
        return res;
    }
}


export class AjouterArticleImpl extends Api.AjouterArticle
{
    async executer(article:Api.Article) : Promise<Api.Id>
    {
        var persistance = new LokiPersistance();
        var inserted = await persistance.collection(Api.Article).insertOne(article);
        return {id: inserted};
    }
}

export class ObtenirArticleImpl extends Api.ObtenirArticle
{
    async executer(id:Api.Id) : Promise<Api.Article>
    {
        var persistance = new LokiPersistance();
        var found = await persistance.collection(Api.Article).findOneById(id.id);
        return found;
    }
}

export class EnregistrerArticleImpl extends Api.EnregistrerArticle
{
    async executer(article:Api.Article) : Promise<void>
    {
        var persistance = new LokiPersistance();
        var inserted = await persistance.collection(Api.Article).updateOne(article);
    }
}