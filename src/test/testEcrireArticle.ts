import { PageInscription } from '../client/pageInscription';
import { Redirection } from '../../bacasable/bacasable/routage';
import { PageModifierArticle } from '../client/pageModifierArticle';
import { PageAccueilAdmin } from '../client/pageAccueilAdmin';
import { ajouterTest } from '../../bacasable/testrunner/runner';
import { PageAccueil } from '../client/pageAccueil';
import {TestBase} from './testBase';

export class TestEcrireArticle extends TestBase
{
    static onInit = ajouterTest(TestEcrireArticle);

    async test()
    {
        var pageInscription = await this.navigateur.suivreLien( 
            this.applicationClient.LienVers(PageInscription)
        );

        pageInscription.email = "admin";
        pageInscription.motDePasse = "admin";
        await pageInscription.sInscrire();

        var lien = this.applicationClient.LienVers(PageAccueil);
        var pageAccueil = await this.navigateur.suivreLien(lien);


        var pageAuthentification = await this.navigateur.suivreLien(pageAccueil.lienSeConnecter);

        pageAuthentification.email = "admin";
        pageAuthentification.motDePasse = "admin";
        var pageAccueilAdmin = await this.navigateur.suivre(
            <Redirection<PageAccueilAdmin>> await pageAuthentification.sAuthentifier()
        );
/*
        var pageAjouterArticle = await this.navigateur.suivre(
             await pageAccueilAdmin.ajouterUnArticle()
         );
*/
    }
}