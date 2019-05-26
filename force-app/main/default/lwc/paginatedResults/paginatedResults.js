import { LightningElement, track, api } from 'lwc';

export default class PaginatedResults extends LightningElement {
    @track dataLoaded = false;
    @api queryString;
}