import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() createContent = new EventEmitter<Promise<Content>>();
  
  onSubmit(e:SubmitEvent, content: Content ) {

    const sendContent = new Promise<any>((resolve,reject)=>{
      setTimeout(() => {
        if(content.title === ""){
          reject();
        }
        else {
          console.log('Content added successfully:', content.title);
          resolve(content);
        }
      }, 1000);
    })
    e.preventDefault();
    this.createContent.emit(sendContent);
  }
}
