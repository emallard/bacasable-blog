import { inject } from '../../bacasable/bacasable/injection';
import { ApplicationClient } from '../../bacasable/bacasable/applicationClient';
import { ajouterRoute, Redirection } from '../../bacasable/bacasable/routage';
import { Authentification } from '../api/authentification';
import { PageAccueilAdmin } from './pageAccueilAdmin';


export class PageAuthentification
{
    static route = ajouterRoute('/authentification', PageAuthentification);

    app = inject(ApplicationClient);
    
    email:string;
    motDePasse:string;
    message:string;

    async sAuthentifier() : Promise<PageAuthentification|Redirection<PageAccueilAdmin>>
    {
        var resultat = await this.app.AppelerWebService(Authentification, {email:this.email, motDePasse:this.motDePasse});
        if (resultat.ok)
            return this.app.RedirigerVers(PageAccueilAdmin);
        else
        {
            this.message = "Erreur de connection";
            return this;
        }
        //var redirection = this.app.RedirigerVers2(PageAccueilAdmin);
        //return redirection;
    }
  
}
