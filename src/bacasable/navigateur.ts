export interface INavigateur
{
    location():string;
    setlocation(_url:string);
    appelerWebService(url:string, parameters:any) : Promise<any>;
}