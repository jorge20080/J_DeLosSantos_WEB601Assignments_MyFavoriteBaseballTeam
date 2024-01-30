import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content: Content = {id:0, title: "abc", description:"abc", creator:"abc"};
  @Input() isFirst:boolean = false;
  constructor(){

  }
  onClick(id:number,title:string){
    console.log(id,title);
  }
}
