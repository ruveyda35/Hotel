import { LightningElement , wire} from 'lwc';
import Lead_OBJECT from '@salesforce/schema/Lead';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import Lead_FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName';
import Lead_LASTNAME_FIELD from '@salesforce/schema/Lead.LastName';
import Lead_COMPANYNAME_FIELD from '@salesforce/schema/Lead.Company';
import Lead_PHONENUMBER_FIELD from '@salesforce/schema/Lead.Phone';
import Lead_EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import Lead_STATUS_FIELD from '@salesforce/schema/Lead.Status';
import { createRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
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
    leadRecordTypeId;

    @wire(getObjectInfo, { objectApiName: Lead_OBJECT })
    results({ error, data }) {
      if (data) {
        this.leadRecordTypeId = data.defaultRecordTypeId;
        this.error = undefined;
      } else if (error) {
        this.error = error;
        this.leadRecordTypeId = undefined;
      }
    }
    @wire(getPicklistValues, {recordTypeId: "$leadRecordTypeId", fieldApiName: STATUS_FIELD })
  picklistResults1({ error, data }) {
    if (data) {
      this.Status1 = data.values;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.ratings = undefined;
    }
    console.log('this.Status1 '+ JSON.stringify(this.Status1))
    
  }

    handleChange(event){
        let {name, value}=event.target;
        if(name==="firstname"){
           this.firstname=value;
        }if(name==="lastname"){
            this.lastname=value;
        }if(name==="company"){
            this.company =value;
        }if(name==="email"){
            this.email=value;
        }if (name==="phone"){
            this.phone=value;
        }if(name==="status"){
            this.status=value;
        }
    }
    @wire(getObjectInfo, { objectApiName: Lead_OBJECT })
    intakeInfo;
    @wire(getPicklistValues, { recordTypeId: "$intakeInfo.data.defaultRecordTypeId", fieldApiName: Lead_STATUS_FIELD })
    status;

    handleClick(){
        
    const fields = {}
    fields[Lead_LASTNAME_FIELD_.fieldApiName] = this.lastname;
    fields[Lead_FIRSTNAME_FIELD.fieldApiName] = this.firstname;
    fields[Lead_EMAIL_FIELD.fieldApiName] = this.email;
    fields[Lead_PHONE_FIELD.fieldApiName] = this.phone;
    fields[Lead_COMPANYNAME_FIELD.fieldApiName] = this.company;
    fields[Lead_STATUS_FIELD.fieldApiName] = this.status;
    

    const recordInput = { apiName: Lead_OBJECT.objectApiName, fields: fields };
    
    createRecord(recordInput)
    .then(intake=>{
        this.firstname="";
        this.lastname="";
        this.description="";
        this.email="";
        this.casesubject="";
        this.phone="";
        this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Your info sent succesfully',
                        variant: 'success',
                    }),
                );
                this.clearFields();
    })
    .catch(error=>{
        console.error('Record creation error:', error);
        this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error while creating record',
                        message: 'Kindly provide all values',
                        variant: 'error',
                    }),
                );
    })
    


}
clearFields() {
    this.firstname = '';
    this.lastname = '';
    this.company = '';
    this.email = '';
    this.phone = '';
    this.status = '';
}
}
/*
    intakeObject = INTAKE_OBJECT;
    myFields = [INTAKE_NAME_FIELD, INTAKE_EMAIL_FIELD, INTAKE_PHONE_FIELD,  INTAKE_CASESUBJECT_FIELD, INTAKE_DESCRIPTION_FIELD];

    handleIntakeCreated(){
       
            const event = new ShowToastEvent({
                title: 'Intake is created',
                variant:'success',
                message:
                    'Your info sent succesfully to our system',
            });
            this.dispatchEvent(event);
        }
    */


