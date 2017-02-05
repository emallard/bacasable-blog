import {
    AjouterArticle,
    Article,
    DerniersArticles,
    DerniersArticlesIn,
    DerniersArticlesOut,
    EnregistrerArticle,
    Id,
    ObtenirArticle
} from '../api/articles';


export class DerniersArticlesMock extends DerniersArticles
{
    async executer(i:DerniersArticlesIn) : Promise<DerniersArticlesOut>
    {
        var res = new DerniersArticlesOut();
        res.articles = [];
        res.articles.push({id: "123456", titre:'titre', auteur:'auteur', contenu:'contenu'})
        return res;
    }
}


export class AjouterArticleMock extends AjouterArticle
{
    async executer(article:Article) : Promise<Id>
    {
        return {id: "123456"};
    }
}

export class ObtenirArticleMock extends ObtenirArticle
{
    async executer(i:Id) : Promise<Article>
    {
        return {id: "123456", titre:'titre', auteur:'auteur', contenu:'contenu'};
    }
}

export class EnregistrerArticleMock extends EnregistrerArticle
{
    async executer(article:Article) : Promise<void>
    {
    }
}