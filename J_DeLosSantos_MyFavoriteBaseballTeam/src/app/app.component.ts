import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { Content } from './helper-files/content-interface';
import { AppMessagesService } from './services/app-messages.service';
import { FavoriteBaseballTeamService } from './services/favorite-baseball-team.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent,ContentCardComponent, AppMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  content: Content = {} as Content;
  title = 'My Favorite Baseball Teams';
  constructor(private contentService: FavoriteBaseballTeamService, private messageService: AppMessagesService){}
  ngOnInit() {
    this.contentService.getContent(5).subscribe(content=> this.content = content);
  }
  getContent(e: SubmitEvent ,id:string){
    e.preventDefault();
    if(isNaN(Number(id)) || Number(id) >= this.contentService.getLength() ){
      this.messageService.clear();
      this.messageService.add('Error Loading Data. Either you enter a non-number value or index is out of range');
    } else{
      this.messageService.clear();
      this.contentService.getContent(Number(id)).subscribe(content=> this.content = content);
    }
  }
}
