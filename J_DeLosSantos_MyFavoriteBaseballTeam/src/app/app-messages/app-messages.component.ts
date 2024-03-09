import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AppMessagesService } from '../services/app-messages.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.scss'
})
export class AppMessagesComponent {
  constructor(public messageService: AppMessagesService){}
}
