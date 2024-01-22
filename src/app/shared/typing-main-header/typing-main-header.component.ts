import { Component, OnInit } from '@angular/core';
import { TypingGamingService } from 'src/app/services/typing-gaming.service';

@Component({
  selector: 'typing-main-header',
  templateUrl: './typing-main-header.component.html',
  styleUrls: ['./typing-main-header.component.scss']
})
export class TypingMainHeaderComponent implements OnInit {

  constructor(private typingGamingService: TypingGamingService) {}

  public nome = this.typingGamingService.getLoggedInUsername()
  

  ngOnInit(): void {
    this.typingGamingService.getLoggedInUsername()
    console.log(this.typingGamingService.getLoggedInUsername())
  }

  public logout() {
    this.typingGamingService.deleteToken()
  }

}
