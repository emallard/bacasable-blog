import { ajouterRouteApi } from '../bacasable/routage';
import { WebService } from '../bacasable/webservice';

export class AuthentificationIn
{
    email:string;
    motDePasse:string;
}

export class AuthentificationOut
{
    ok:boolean;
}

export class Authentification extends WebService<AuthentificationIn, AuthentificationOut>
{
    static route = ajouterRouteApi('/api/authentification', Authentification);
}