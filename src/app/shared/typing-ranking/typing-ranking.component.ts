import { Component, OnInit } from '@angular/core';
import { TypingGamingService } from 'src/app/services/typing-gaming.service';

@Component({
  selector: 'typing-ranking',
  templateUrl: './typing-ranking.component.html',
  styleUrls: ['./typing-ranking.component.scss']
})
export class TypingRankingComponent implements OnInit {

  constructor(private typingGamingService: TypingGamingService) {}

  public jogadores:any = []

  ngOnInit(): void {
      this.typingGamingService.rankingNames().subscribe(data => {
        this.jogadores = data
      })
  }

}
