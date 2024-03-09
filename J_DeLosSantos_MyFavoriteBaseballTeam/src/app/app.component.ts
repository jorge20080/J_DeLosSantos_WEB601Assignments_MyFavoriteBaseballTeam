import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { Content } from './helper-files/content-interface';
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
  constructor(private contentService: FavoriteBaseballTeamService){}

  ngOnInit() {
    this.contentService.getContent(5).subscribe(content=> this.content = content);
  }
}
