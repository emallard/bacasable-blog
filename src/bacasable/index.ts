import {ApplicationClient} from './applicationClient';
import {ApplicationServeur} from './applicationServeur';
import {BacASable} from './bacasable';
import {Implementations} from './implementations';
import {InternetBacASable} from './internetBacasable';
import {Kernel} from './kernel';
import {Lanceur} from './lanceur';
import {INavigateur} from './navigateur'
import {NavigateurBacASable} from './navigateurBacasable';
import {NavigateurReel} from './navigateurClient';
import {IRoutable, Lien, Redirection, Routeur, RouteParamétrée} from './routage';
import {ServeurBacASable} from './serveurBacasable';
import {WebService} from './webservice';

export { 
    ApplicationClient,
    ApplicationServeur,
    BacASable,
    Implementations,
    InternetBacASable,
    Kernel,
    Lanceur,
    INavigateur,
    NavigateurBacASable,
    NavigateurReel,
    IRoutable, Lien, Redirection, Routeur, RouteParamétrée,
    ServeurBacASable,
    WebService
};


export function LienVers<T>(c: {new(): T; }) : Lien<T>
{
    return Kernel.applicationClient.LienVers(c);
}

export function RedirigerVers<T>(c: {new(): T; }) : Redirection<T>
{
    return Kernel.applicationClient.RedirigerVers(c);
}

export function RedirigerVers2<T extends IRoutable<U>, U>(type: {new(): T; }, parametres:U) : Redirection<T>
{
    return Kernel.applicationClient.RedirigerVers2(type, parametres);
}

export async function AppelerWebService<T, U>(w:{new():WebService<T,U>}, t:T) : Promise<U>
{
    return Kernel.applicationClient.AppelerWebService(w, t);
}