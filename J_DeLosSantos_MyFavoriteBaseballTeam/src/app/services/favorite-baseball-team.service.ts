import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentItems } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class FavoriteBaseballTeamService {
  constructor() { }
  getContentList(): Observable<Content[]>{
    return of(contentItems);
  }
  getContent(id:number): Observable<Content>{
    return of(contentItems[id]);
  }
}
