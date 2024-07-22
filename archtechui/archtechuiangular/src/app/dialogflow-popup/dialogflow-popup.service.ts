import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ` + btoa('user:user')
    }) 
}
@Injectable({
    providedIn:'root'
})
export class DialogflowPopupService {
    http: HttpClient;
    constructor(http: HttpClient){
        this.http =http;
    }

    sendMessageToDialogFlowAgent(){
        return this.http.get("test/api/", httpOptions);
    }
}