
import * as Api from '../api'


export class DerniersArticlesMock extends Api.DerniersArticles
{
    async executer(i:Api.DerniersArticlesIn) : Promise<Api.DerniersArticlesOut>
    {
        var res = new Api.DerniersArticlesOut();
        res.articles = [];
        res.articles.push({id: "123456", auteur:'auteur', contenu:'contenu'})
        return res;
    }
}


export class AjouterArticleMock extends Api.AjouterArticle
{
    async executer(article:Api.Article) : Promise<Api.Id>
    {
        return {id: "123456"};
    }
}

export class ObtenirArticleMock extends Api.ObtenirArticle
{
    async executer(i:Api.Id) : Promise<Api.Article>
    {
        return {id: "123456", auteur:'auteur', contenu:'contenu'};
    }
}

export class EnregistrerArticleMock extends Api.EnregistrerArticle
{
    async executer(article:Api.Article) : Promise<void>
    {
    }
}