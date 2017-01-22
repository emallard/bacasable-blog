import {NavigateurBacASable, ApplicationClient} from '../bacasable';
import {TestBase} from './testBase';
import * as C from '../client';

export class TestAjouterArticle extends TestBase
{
    async test()
    {
        var lien = this.applicationClient.LienVers(C.PageAccueil);
        var pageAccueil = await this.navigateur.suivreLien(lien);
        
        var pageModifier = await this.navigateur.suivre(
            await pageAccueil.ajouterUnArticle()
        );
        
        var idArticle = pageModifier.article.id;
        pageModifier.article.contenu = "Nouveau contenu";
        await pageModifier.enregistrer();
        
        var lien2 = this.applicationClient.LienVers2(C.PageVoirArticle, {id: idArticle});
        var pageVoir = await this.navigateur.suivreLien(lien2);
        
        console.log(pageVoir.article);
    }
}
