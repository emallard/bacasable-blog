import { WebService } from '../../bacasable/webservice';
import { ajouterRouteApi } from '../../bacasable/routage';


export class Article
{
    id:string;
    auteur:string;
    contenu:string;
    titre:string;
}

export class DerniersArticlesIn
{
    contenu:string;
}

export class DerniersArticlesOut
{
    articles:Article[];
}

export class Id
{
    id:string;
}

export class DerniersArticles extends WebService<DerniersArticlesIn, DerniersArticlesOut>
{
    static route = ajouterRouteApi('/api/derniers', DerniersArticles);
}

export class ObtenirTousLesArticles extends WebService<any, Article[]>
{
    static route = ajouterRouteApi('/api/tous', ObtenirTousLesArticles);
}

export class AjouterArticle extends WebService<Article, Id>
{
    static route = ajouterRouteApi('/api/article/ajouter', AjouterArticle);
}

export class ObtenirArticle extends WebService<Id, Article>
{
    static route = ajouterRouteApi('/api/article/obtenir', ObtenirArticle);
}

export class EnregistrerArticle extends WebService<Article, void>
{
    static route = ajouterRouteApi('/api/article/enregistrer', EnregistrerArticle);
}

