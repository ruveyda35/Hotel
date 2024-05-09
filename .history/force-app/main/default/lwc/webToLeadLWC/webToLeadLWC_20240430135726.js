import { LightningElement } from 'lwc';
import Lead_FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName';
import Lead_LASTNAME_FIELD from '@salesforce/schema/Lead.LastName';
import Lead_COMPANYNAME_FIELD from '@salesforce/schema/Lead.Company';
import Lead_PHONENUMBER_FIELD from '@salesforce/schema/Lead.Phone';
import Lead_EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import Lead_STATUS_FIELD from '@salesforce/schema/Lead.Status';
//lawPicture is coming from Static resource
//import lawPicture from '@salesforce/resourceUrl/lawPicture';
//export const LAW_IMAGE = picture ;
export default class WebToLeadLWC extends LightningElement {

   // picture = LAW_IMAGE;
   // picture =  lawPicture + '/Salesforce.png';

    firstname="";
    lastname="";
    company="";
    email="";
    phone="";
    status="";
    handleChange(event){
        let {name, value}=event.target;
        if(name==="firstname"){
           this.firstname=value;
        }if(name==="lastname"){
            this.lastname=value;
        }if(name==="company"){
            this.c =value;
        }if(name==="email"){
            this.email=value;
        }if (name==="phone"){
            this.phone=value;
        }if(name==="status"){
            this.status=value;
        }
    }

}