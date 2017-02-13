import { inject, injectFunc } from '../../bacasable/bacasable/injection';
import { ApplicationClient } from '../../bacasable/bacasable/applicationClient';
import { PageModifierArticle } from './pageModifierArticle';
import { ajouterRoute, Lien, Redirection } from '../../bacasable/bacasable/routage';
import { AjouterArticle, Article, ObtenirTousLesArticles } from '../api/articles';



export class PageAccueilAdmin
{
    static route = ajouterRoute('/admin/accueil', PageAccueilAdmin);

    app = inject(ApplicationClient);
    creerComposantArticle = injectFunc(ComposantArticle);

    articles:ComposantArticle[];

    async construire()
    {
        var _articles = await this.app.AppelerWebService(ObtenirTousLesArticles, {});
/*
        _articles.forEach(a => 
        {
            var composant = this.creerComposantArticle();
            composant.setArticle(a);
            this.articles.push(composant);
        });
        */
    }

    async ajouterUnArticle() : Promise<Redirection<PageModifierArticle>>
    {
        console.log("ajouterUnArticle");
        var article = new Article();
        var id = await this.app.AppelerWebService(AjouterArticle, article);
        var redirection = this.app.RedirigerVers2(PageModifierArticle, id);
        return redirection;
        
        /*
        var article = new Api.Article();
        var id = await this.ajouterArticle.appeler(article);
        return this.rediriger.vers(Pages.PageModifierArticle, id);
        */
    }
}

export class ComposantArticle
{
    app = inject(ApplicationClient);

    article: Article;
    lien : Lien<PageModifierArticle>;
    setArticle(article:Article)
    {
        this.article = article;
        this.lien = this.app.LienVers2(PageModifierArticle, {id: article.id});
    }
}

