/* eslint-disable no-console */

import { LightningElement, track, api, wire } from 'lwc';
import returnQueryString from '@salesforce/apex/QueryResults.returnQueryString';

export default class PaginatedResults extends LightningElement {
    @track
    dataLoaded = true;

    @track
    queryOutput = '';

    @api
    queryString;

    @wire(returnQueryString, { query: '$queryString' })
    methodReturn({ error, data }) {
        if (data) {
            this.queryOutput = data;
            this.error = undefined;
            console.log('Data ==> ' + data);
            
        } else if (error) {
            console.log('Error ==> ' + error);
            this.data = undefined;
            this.error = error;
        }
    }
        
}