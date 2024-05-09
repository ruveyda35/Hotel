import { LightningElement } from 'lwc';
//lawPicture is coming from Static resource
import lawPicture from '@salesforce/resourceUrl/lawPicture';
//export const LAW_IMAGE = picture ;
export default class WebToLeadLWC extends LightningElement {

   // picture = LAW_IMAGE;
    picture =  lawPicture + '/Salesforce.png';


}