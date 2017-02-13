import { inject } from '../../bacasable/bacasable/injection';
import { ApplicationClient } from '../../bacasable/bacasable/applicationClient';
import { ajouterRoute, Redirection } from '../../bacasable/bacasable/routage';
import { Authentification, Inscription } from '../api/authentification';
import { PageAccueilAdmin } from './pageAccueilAdmin';


export class PageInscription
{
    static route = ajouterRoute('/inscription', PageInscription);

    app = inject(ApplicationClient);
    
    email:string;
    motDePasse:string;
    message:string;

    async sInscrire()
    {
        await this.app.AppelerWebService(Inscription, {email:this.email, motDePasse:this.motDePasse});
    }
  
}
