import { inject } from '../bacasable/injection';
import { ApplicationClient } from '../bacasable/applicationClient';
import { ajouterRoute } from '../bacasable/routage';
import { Contacter, ContacterIn } from '../api/contacter';

export class PageContact
{
    static route = ajouterRoute('/contact', PageContact);

    app = inject(ApplicationClient);

    contact = new ContacterIn(); 
    contactEnvoye = false;

    async envoyer() : Promise<void>
    {
        await this.app.AppelerWebService(Contacter, this.contact);
        this.contactEnvoye = true;
    }
}

