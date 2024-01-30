import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ContentCardComponent } from '../content-card/content-card.component';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentCardComponent, NgFor],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentItems: Content[];
  test : string[];
  constructor(){
    this.contentItems = [
      {
        id:1,
        title:"Boston Red Sox",
        description: "The Boston Red Sox are an American professional baseball team based in Boston. The Red Sox compete in Major League Baseball (MLB) as a member club of the American League (AL) East division. Founded in 1901 as one of the American League's eight charter franchises, the team's home ballpark has been Fenway Park since 1912.",
        creator: "John I. Taylor",
        imgURL: "/assets/img/redsox.jpeg",
        type: "Test Type",
        tags: ["AL", "MLB", "AL EAST"]
      },
      {
        id:2,
        title:"New York Mets",
        description: "The New York Mets are an American professional baseball team based in the New York City borough of Queens. The Mets compete in Major League Baseball (MLB) as a member of the National League (NL) East division. They are one of two major league clubs based in New York City, the other being the American League's (AL) New York Yankees.",
        creator: "Steve Cohen",
      },
      {
        id:3,
        title:"San Diego Padres",
        description: "The San Diego Padres are an American professional baseball team based in San Diego. The Padres compete in Major League Baseball (MLB) as a member club of the National League (NL) West division. Founded in 1969, the club has won two NL pennants—in 1984 and 1998, losing in the World Series both years.",
        creator: "C. Arnholt Smith",
        imgURL: "/assets/img/padres.png"
      }, 
      {
        id:4,
        title:"Philadelphia Phillies",
        description: "The Philadelphia Phillies are an American professional baseball team based in Philadelphia. The Phillies compete in Major League Baseball (MLB) as a member of the National League (NL) East division. Since 2004, the team's home stadium has been Citizens Bank Park, located in the South Philadelphia Sports Complex.",
        creator: "Al Reach",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Philadelphia_Phillies_Insignia.svg/1920px-Philadelphia_Phillies_Insignia.svg.png"
      },
      {
        id:5,
        title:"Texas Rangers",
        description: "The Texas Rangers are an American professional baseball team based in the Dallas–Fort Worth metroplex. The Rangers compete in Major League Baseball (MLB) as a member club of the American League (AL) West division. n 2020, the Rangers moved to the new Globe Life Field in Arlington after having played at Globe Life Park (now Choctaw Stadium) from 1994 to 2019.",
        creator: "Stephen F. Austin",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/4/41/Texas_Rangers.svg"
      },
      {
        id:6,
        title:"Tampa Bay Rays",
        description: "The Tampa Bay Rays are an American professional baseball team based in the Tampa Bay area. The Rays compete in Major League Baseball (MLB) as a member club of the American League (AL) East division. Since its inception, the team's home ballpark has been Tropicana Field in St. Petersburg, Florida.",
        creator: "Vince Naimoli",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tampa_Bay_Rays_cap_logo.svg/1920px-Tampa_Bay_Rays_cap_logo.svg.png"
      }
    ]
    this.test = ["test", "test2"];
  }
  
}
