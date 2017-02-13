import { IPersistance } from '../../../bacasable/bacasable/persistance';
import { bind, inject } from '../../../bacasable/bacasable/injection';
import { ExecutionRequeteServeur } from '../../../bacasable/bacasable/executionRequeteServeur';
import {
    AjouterArticle,
    Article,
    DerniersArticles,
    DerniersArticlesIn,
    DerniersArticlesOut,
    EnregistrerArticle,
    Id,
    ObtenirArticle,
    ObtenirTousLesArticles
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

    persistance = inject(IPersistance);

    async executer(article:Article) : Promise<Id>
    {
        var inserted = await this.persistance.collection(Article).insertOne(article);
        return {id: inserted};
    }
}

export class ObtenirArticleImpl extends ObtenirArticle
{
    static binding = bind(ObtenirArticle).to(ObtenirArticleImpl).inTypeScope(ExecutionRequeteServeur);

    persistance = inject(IPersistance);
    async executer(id:Id) : Promise<Article>
    {
        var found = await this.persistance.collection(Article).findOneById(id.id);
        return found;
    }
}

export class ObtenirTousLesArticleImpl extends ObtenirTousLesArticles
{
    static binding = bind(ObtenirTousLesArticles).to(ObtenirTousLesArticleImpl).inTypeScope(ExecutionRequeteServeur);

    persistance = inject(IPersistance);
    async executer(id:Id) : Promise<Article[]>
    {
        var found = await this.persistance.collection(Article).find({});
        return found;
    }
}

export class EnregistrerArticleImpl extends EnregistrerArticle
{
    static binding = bind(EnregistrerArticle).to(EnregistrerArticleImpl).inTypeScope(ExecutionRequeteServeur);

    persistance = inject(IPersistance);
    async executer(article:Article) : Promise<void>
    {
        var inserted = await this.persistance.collection(Article).updateOne(article);
    }
}