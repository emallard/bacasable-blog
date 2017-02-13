import { ajouterTest } from '../../bacasable/testrunner/runner';
import { PageVoirArticle } from '../client/pageVoirArticle';
import { PageAccueil } from '../client/pageAccueil';
import {TestBase} from './testBase';

export class TestAjouterArticle extends TestBase
{
    static onInit = ajouterTest(TestAjouterArticle);

    async test()
    {
        var lien = this.applicationClient.LienVers(PageAccueil);
        var pageAccueil = await this.navigateur.suivreLien(lien);
        
        var pageModifier = await this.navigateur.suivre(
            await pageAccueil.ajouterUnArticle()
        );
        
        var idArticle = pageModifier.article.id;
        pageModifier.article.contenu = "Nouveau contenu";
        await pageModifier.enregistrer();
        
        var lien2 = this.applicationClient.LienVers2(PageVoirArticle, {id: idArticle});
        var pageVoir = await this.navigateur.suivreLien(lien2);
        
        console.log(pageVoir.article);
    }
}


