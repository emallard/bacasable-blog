import { ajouterRouteApi } from '../../bacasable/bacasable/routage';
import { WebService } from '../../bacasable/bacasable/webservice';

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