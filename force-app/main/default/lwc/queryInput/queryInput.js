import { LightningElement, track } from 'lwc';

export default class QueryInput extends LightningElement {
    @track 
    queryString;

    @track 
    returnValue;

    @track 
    error;

    handleQuery() {
        // ToDo: Return query results
        this.returnValue = this.queryString;
    }

    setQueryString(event) {
        this.queryString = event.target.value;
    }
}