import { ajouterRouteApi } from '../bacasable/routage';
import { WebService } from '../bacasable/webservice';

export class ContacterIn
{
    email:string;
    sujet:string;
    contenu:string;
}

export class Contacter extends WebService<ContacterIn, void>
{
    static route = ajouterRouteApi('/api/contacter', Contacter);
}