import { TestInjection } from '../bacasable/injection.tests';

import * as B from "../bacasable"

var injection = new B.Injection();


// création d'une application serveur
// avec un webservice qui utilise l'authentification
// et un webservice qui utilise l'authentification

// par défaut tout est injecté par requête
//injection.enSingleton(B.InternetBacASable);
//injection.unParRequete(B.ApplicationServeur);

// vérification qu'une instance différente est créée à chaque requete.
var test = new TestInjection();
test.test();

//injection.enSingleton(B.IPersistance, B.LokiPersistance);
//injection.unParRequete(B.IAuthentificationEmailMotDePasse, B.AuthentificationEmailMotDePasseBacasable);