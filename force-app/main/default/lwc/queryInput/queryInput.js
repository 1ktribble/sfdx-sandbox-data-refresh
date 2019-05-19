import { LightningElement, track } from 'lwc';
import returnQueryString from '@salesforce/apex/QueryResults.returnQueryString';

export default class QueryInput extends LightningElement {
    @track queryString = "";
    @track returnValue;
    @track error;

    handleQuery() {
        returnQueryString({query : this.queryString})
            .then(result => {
                this.returnValue = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.returnValue = undefined;
            });
    }
}