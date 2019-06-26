/* eslint-disable no-console */

import { LightningElement, track, api, wire } from 'lwc';
import returnQueryString from '@salesforce/apex/QueryResults.returnQueryString';

export default class PaginatedResults extends LightningElement {
    @track
    dataLoaded = false;

    @track
    sObjectsReturned = '';

    @api
    queryString;

    @wire(returnQueryString, { query: '$queryString' })
    async returnQueryResults({ error, data }) {
        if (data) {
            this.sObjectsReturned = await JSON.stringify(data);
            this.dataLoaded = true;
            this.error = await undefined;            
        } else if (error) {
            console.log('Error ==> ' + error);
            this.data = undefined;
            this.error = error;
        }
    }

    // parseJSON(input){
    //     // return the first value of the input
    //     return input[0];
    // }
        
}