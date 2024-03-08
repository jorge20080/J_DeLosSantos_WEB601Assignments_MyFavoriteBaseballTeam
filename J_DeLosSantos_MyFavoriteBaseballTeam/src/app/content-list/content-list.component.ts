import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterTypePipe } from '../filter-type.pipe';
import { Content } from '../helper-files/content-interface';
import { contentItems } from '../helper-files/contentDb';
import { FavoriteBaseballTeamService } from '../services/favorite-baseball-team.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentCardComponent, NgFor, NgIf, FilterTypePipe],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})

export class ContentListComponent {
  contentItems: Content[] = [];
  searchValue: string =""; 
  showResult: boolean = false;

  constructor(private contentService: FavoriteBaseballTeamService){
    this.contentService.getContent().subscribe(content=> this.contentItems = content);
  }
  

  checkIfTitleExists(){
    return this.contentItems.some(content=>content.title===this.searchValue);
  }
  updateValue(value:string){
    this.searchValue = value;
    this.showResult = false;
  }
  handleOnClick(){
    this.showResult = true;
  }
}
