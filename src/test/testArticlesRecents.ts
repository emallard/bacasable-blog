import { ajouterTest } from '../testrunner/runner';
import { PageAccueil } from '../client/pageAccueil';
import {TestBase} from './testBase';

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
        var lien = this.applicationClient.LienVers(PageAccueil);
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
