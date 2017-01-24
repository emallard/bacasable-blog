import {NavigateurBacASable, ApplicationClient} from '../bacasable';
import {TestBase, ajouterTest} from './testBase';
import * as C from '../client';


export class TestArticlesRecents extends TestBase
{
    static onInit = ajouterTest(TestArticlesRecents);

    async test()
    {
        for (var i=0; i<20; ++i)
        {
            await this.ajouter('titre ' + i);
        }
    }

    async ajouter(titre:string) 
    {
        var lien = this.applicationClient.LienVers(C.PageAccueil);
        var pageAccueil = await this.navigateur.suivreLien(lien);
        
        var pageModifier = await this.navigateur.suivre(
            await pageAccueil.ajouterUnArticle()
        );
        
        var idArticle = pageModifier.article.id;
        pageModifier.article.contenu = "Nouveau contenu";
        pageModifier.article.titre = titre;
        await pageModifier.enregistrer();
    }
}
