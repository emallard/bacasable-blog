
import * as Def from '../api'


export class DerniersArticlesImpl extends Def.DerniersArticles
{
    executer(i:Def.DerniersArticlesIn) : Def.DerniersArticlesOut
    {
        // todo MongoDB
        var res = new Def.DerniersArticlesOut();
        res.articles = [];
        res.articles.push({id: "123456", auteur:'auteur', contenu:'contenu'})
        return res;
    }
}


export class AjouterArticleImpl extends Def.AjouterArticle
{
    executer(i:void) : Def.Id
    {
        // todo MongoDB
        return {id: "123456"};
    }
}

export class ObtenirArticleImpl extends Def.ObtenirArticle
{
    executer(i:Def.Id) : Def.Article
    {
        // todo MongoDB
        return {id: "123456", auteur:'auteur', contenu:'contenu'}
    }
}

export class EnregistrerArticleImpl extends Def.EnregistrerArticle
{
    executer(article:Def.Article) : void
    {
        // todo MongoDB
    }
}