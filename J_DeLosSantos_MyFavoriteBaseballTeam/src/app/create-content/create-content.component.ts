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
  @Output() createContent = new EventEmitter<Content>();
  content: Content = {} as Content;
  
  onSubmit(e:Event, content: Content ) {
    e.preventDefault();
    this.content = content;
    this.createContent.emit(this.content);
  }
}
