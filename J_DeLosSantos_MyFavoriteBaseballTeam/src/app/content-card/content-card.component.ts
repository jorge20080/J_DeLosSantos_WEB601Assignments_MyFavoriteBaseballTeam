import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList = new ContentList();
  constructor(){
    this.contentList.add({
      id:1,
      title:"Boston Red Sox",
      description: "The Boston Red Sox are an American professional baseball team based in Boston. The Red Sox compete in Major League Baseball (MLB) as a member club of the American League (AL) East division. Founded in 1901 as one of the American League's eight charter franchises, the team's home ballpark has been Fenway Park since 1912.",
      creator: "John I. Taylor",
      imgURL: "/assets/img/redsox.jpeg"
    });
    this.contentList.add({
      id:1,
      title:"New York Mets",
      description: "The New York Mets are an American professional baseball team based in the New York City borough of Queens. The Mets compete in Major League Baseball (MLB) as a member of the National League (NL) East division. They are one of two major league clubs based in New York City, the other being the American League's (AL) New York Yankees.",
      creator: "Steve Cohen",
      imgURL: "/assets/img/mets.png"
    });
    this.contentList.add({
      id:1,
      title:"San Diego Padres",
      description: "The San Diego Padres are an American professional baseball team based in San Diego. The Padres compete in Major League Baseball (MLB) as a member club of the National League (NL) West division. Founded in 1969, the club has won two NL pennants—in 1984 and 1998, losing in the World Series both years.",
      creator: "C. Arnholt Smith",
      imgURL: "/assets/img/padres.png"
    });
  }
}
