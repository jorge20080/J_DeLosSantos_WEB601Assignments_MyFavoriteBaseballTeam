import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentItems } from '../helper-files/contentDb';
import { AppMessagesService } from './app-messages.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteBaseballTeamService {
  constructor(private messageService: AppMessagesService) { }
  getContentList(): Observable<Content[]>{
    const items = of(contentItems);
    this.messageService.add('Content array loaded!');
    return items;
  }
  getContent(id:number): Observable<Content>{
    // const item = of(contentItems.find(content=>content.id===id) || {} as Content);
    const item = of(contentItems[id]);
    this.messageService.add(`Content Item at id: ${id}`);
    return item;
  }
  getLength(){
    return contentItems.length;
  }
}
