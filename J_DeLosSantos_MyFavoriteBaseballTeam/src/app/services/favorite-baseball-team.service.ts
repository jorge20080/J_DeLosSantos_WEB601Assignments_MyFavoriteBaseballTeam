import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentItems } from '../helper-files/contentDb';
import { AppMessagesService } from './app-messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteBaseballTeamService {
  constructor(private http: HttpClient) { }
  getContentList(): Observable<Content[]>{
    // const items = of(contentItems);
    // this.messageService.add('Content array loaded!');
    // return items;
    return this.http.get<Content[]>("api/content");
  }
  getContent(id:number): Observable<Content>{
    // const item = of(contentItems.find(content=>content.id===id) || {} as Content);
    // const item = of(contentItems[id]);
    // this.messageService.add(`Content Item at id: ${id}`);
    // return item;
    return this.http.get<Content>("api/content");
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
  };
  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }
  updateContent(contentItem: Content): Observable<any>{
    return this.http.put("api/content" , contentItem, this.httpOptions);
  }
  getLength(){
    return contentItems.length;
  }
}
