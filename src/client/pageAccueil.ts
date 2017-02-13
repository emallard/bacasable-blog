import { PageContact } from './pageContact';
import { ApplicationClient } from '../../bacasable/bacasable/applicationClient';
import { inject, injectNewGeneric } from '../../bacasable/bacasable/injection';
import { ajouterRoute, Lien, Redirection } from '../../bacasable/bacasable/routage';
import { PageModifierArticle } from './pageModifierArticle';
import { PageAuthentification } from './pageAuthentification';
import { AjouterArticle, Article } from '../api/articles';



export class PageAccueil
{
    static route = ajouterRoute('/', PageAccueil);
    
    app = inject(ApplicationClient);
    
    //lienSeConnecter = injectLien(Pages.PageAuthentification);
    //ajouterArticle = injectAppel(Api.AjouterArticle);
    //rediriger = inject(RedirigerVers);
    //redirection = injectRedirection(Pages.PageModifierArticle);

    lienSeConnecter = injectNewGeneric(new Lien<PageAuthentification>());
    lienContact = injectNewGeneric(new Lien<PageContact>());

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


/*
    afficherRecents()
    {

    }
*/
      
}

