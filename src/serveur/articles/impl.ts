import { bind } from '../../../bacasable/bacasable/injection';
import { ExecutionRequeteServeur } from '../../../bacasable/bacasable/executionRequeteServeur';
import {
    AjouterArticle,
    Article,
    DerniersArticles,
    DerniersArticlesIn,
    DerniersArticlesOut,
    EnregistrerArticle,
    Id,
    ObtenirArticle
} from '../../api/articles';
import { LokiPersistance } from '../../../bacasable/bacasable/persistanceLoki';

export class DerniersArticlesImpl extends DerniersArticles
{
    static binding = bind(DerniersArticles).to(DerniersArticlesImpl).inTypeScope(ExecutionRequeteServeur);

    async executer(i:DerniersArticlesIn) : Promise<DerniersArticlesOut>
    {
        var res = new DerniersArticlesOut();
        res.articles = [];
        res.articles.push({id: "123456", titre:'titre', auteur:'auteur', contenu:'contenu'})
        return res;
    }
}


export class AjouterArticleImpl extends AjouterArticle
{
    static binding = bind(AjouterArticle).to(AjouterArticleImpl).inTypeScope(ExecutionRequeteServeur);

    async executer(article:Article) : Promise<Id>
    {
        var persistance = new LokiPersistance();
        var inserted = await persistance.collection(Article).insertOne(article);
        return {id: inserted};
    }
}

export class ObtenirArticleImpl extends ObtenirArticle
{
    static binding = bind(ObtenirArticle).to(ObtenirArticleImpl).inTypeScope(ExecutionRequeteServeur);

    async executer(id:Id) : Promise<Article>
    {
        var persistance = new LokiPersistance();
        var found = await persistance.collection(Article).findOneById(id.id);
        return found;
    }
}

export class EnregistrerArticleImpl extends EnregistrerArticle
{
    static binding = bind(EnregistrerArticle).to(EnregistrerArticleImpl).inTypeScope(ExecutionRequeteServeur);

    async executer(article:Article) : Promise<void>
    {
        var persistance = new LokiPersistance();
        var inserted = await persistance.collection(Article).updateOne(article);
    }
}