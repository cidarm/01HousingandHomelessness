/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class ServiceRecommendations extends LightningElement {

    handleGetRecommendations(){
        console.log('getting recommendations');
    }
}