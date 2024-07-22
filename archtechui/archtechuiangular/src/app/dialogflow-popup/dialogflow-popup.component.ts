import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import { DialogflowPopupService } from './dialogflow-popup.service';

export interface Message {
  type: string,
  message: string
}
@Component({
  selector: 'app-dialogflow-popup',
  templateUrl: './dialogflow-popup.component.html',
  styleUrl: './dialogflow-popup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogflowPopupComponent {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef = {} as ElementRef;
 messages: Message[] = [];
 inputText: string = "";
  dialogflowService: DialogflowPopupService;
  constructor(dialogflowService: DialogflowPopupService){
   
    this.dialogflowService = dialogflowService;
    var sender = {
      "type": "sender",
      "message": "How are you?"
    }
    this.messages.push(sender);
    var response = {
      "type": "bot",
      "message": "I am good. How are you?"
    }

    this.messages.push(response);
  }
  readonly panelOpenState = signal(false);

  sendMessage(){
    var sender = {
      "type": "sender",
      "message": this.inputText
    }
    this.messages.push(sender);
    this.inputText="";
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }
}
