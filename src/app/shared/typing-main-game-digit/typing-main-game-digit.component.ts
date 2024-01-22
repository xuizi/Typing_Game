import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TypingGamingService } from 'src/app/services/typing-gaming.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'typing-main-game-digit',
  templateUrl: './typing-main-game-digit.component.html',
  styleUrls: ['./typing-main-game-digit.component.scss']
})
export class TypingMainGameDigitComponent implements OnInit {

  constructor(private elementRef: ElementRef,private typingGamingService:TypingGamingService,private router:Router) {}

  public nome = this.typingGamingService.getLoggedInUsername()

  public typingText: any;
  public inpField: any;

  public charIndex:number = 0;
  public mistakes:number = 0;
  public timer: number | undefined  = 60;
  public remainingTime:number = this.timer || 60;
  public cpm:number = 0;
  public wpm:number = 0;
  public maxTime:number = 60;
  public controleRanking:boolean = false;


  public paragraphs:Array<string> = [
    'O pôr do sol pintava o céu com tonalidades quentes e vibrantes, enquanto as ondas do mar quebravam suavemente na praia deserta, criando uma atmosfera de paz e serenidade que envolvia os presentes num abraço acolhedor da natureza.',
    'No jardim, as flores exalavam um perfume doce e envolvente, atraindo borboletas coloridas que dançavam no ar. As crianças riam e brincavam, criando memórias felizes que seriam guardadas no coração para sempre.',
    'Sob o céu estrelado, os amantes caminhavam de mãos dadas, compartilhando segredos e sonhos enquanto a lua iluminava o caminho à frente. O vento sussurrava palavras de carinho, tornando aquele momento mágico e eterno.',
    'O aroma de pão fresco e café recém-preparado enchia a padaria, convidando os clientes a saborear as delícias da manhã. O padeiro sorria calorosamente, orgulhoso de suas criações que traziam conforto e alegria à comunidade.',
    'Nas montanhas imponentes, a neve brilhava como diamantes sob o sol radiante. Os esquiadores deslizavam pela encosta, sentindo a adrenalina e a liberdade que só a natureza selvagem poderia proporcionar.',
    'No mercado movimentado, os comerciantes anunciavam suas mercadorias com entusiasmo, oferecendo frutas frescas, especiarias exóticas e artesanatos coloridos. Os clientes exploravam cada canto, absorvendo a energia vibrante e as histórias contadas pelos produtos à venda.',
    'No estúdio de arte, pincéis dançavam sobre a tela, dando vida a um mundo de cores e formas. O artista se entregava à sua paixão, expressando emoções e visões que transcendiam o comum, convidando os observadores a mergulharem na sua imaginação.',
    'O voo do pássaro cortou o céu como um raio de luz, demonstrando uma graça e liberdade que inspiravam os espectadores. Suas asas batiam em harmonia com o vento, criando uma coreografia aérea que parecia desafiar as leis da física.',
    'Na biblioteca silenciosa, os livros eram guardiões de conhecimento e aventuras infinitas. Cada prateleira era um portal para mundos distintos, convidando os leitores a explorarem terras desconhecidas e a conhecerem personagens fascinantes que povoavam as páginas.',
    'Na rua movimentada, o som dos passos e vozes se fundiam em uma sinfonia urbana. As luzes da cidade brilhavam intensamente, criando um espetáculo de cores e vida que celebrava a diversidade e a energia pulsante do ambiente urbano.',
  ]


  public randomParagraph() {
    let randIndex = Math.floor(Math.random() * this.paragraphs.length);
    this.typingText.innerHTML = this.paragraphs[randIndex]
      .split('')
      .map(char => `<span>${char}</span>`)
      .join('');
  }

  public initTyping() {
    const characters = this.typingText.querySelectorAll("span");
    let typedChar = this.inpField.value.split("")[this.charIndex];

    if(this.charIndex < characters.length - 1 && this.remainingTime > 0) {
      if (characters[this.charIndex]) {
        if (typedChar == null && this.charIndex > 0) {
            characters[this.charIndex].style.color = '';
            this.charIndex--;
    
            if (characters[this.charIndex].style.background == 'rgb(255, 192, 203)') {
                this.mistakes--;
            }
    
            characters[this.charIndex].style.color = '';
            characters[this.charIndex].style.outline = '';
            characters[this.charIndex].style.background = '';
            characters[this.charIndex].style.borderRadius = '';
        }
      else {
            if (characters[this.charIndex].innerText === typedChar) {
                characters[this.charIndex].style.color = '#006400';
            } else {
                this.mistakes++;
                characters[this.charIndex].style.color = '#cb3439';
                characters[this.charIndex].style.outline = '1px solid #fff';
                characters[this.charIndex].style.background = '#ffc0cb';
                characters[this.charIndex].style.borderRadius = '4px';
            }
            this.charIndex++;
            characters[this.charIndex].style.color = '#17A2B8';
            this.wpm = Math.round((((this.charIndex - this.mistakes)/5) / (this.maxTime - this.remainingTime))*60)

            this.cpm = this.charIndex - this.mistakes;
            }
      }

    } else {
        this.inpField.value = "";
        clearInterval(this.remainingTime);
        this.controleRanking = true;
    };

   
    }

    public initTimer() {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timer);
      }
    }
    

  public resetGame() {
    this.randomParagraph();
    this.remainingTime = 60;
    this.charIndex = 0;
    this.mistakes = 0;
    this.wpm = 0
    this.cpm = 0;
    this.inpField.value = "";
    this.controleRanking = false;

    clearInterval(this.timer);

    this.timer = setInterval(() => {
      this.initTimer();
    }, 1000) as any;
  }

  public enviarDadosRanking() {
    const dados = {
      username: this.nome,
      mistakes: this.mistakes,
      wpm: this.wpm,
      cpm: this.cpm,
    };

  
    this.typingGamingService.sendDataToRanking(dados).pipe(first()).subscribe(
      (resposta) => {
        console.log('Dados enviados com sucesso para o PHP', resposta);
        this.router.navigate(['/ranking']);
      },
      error => {
        console.error('Erro ao enviar dados para o PHP', error);
      }
    );
  }

  ngOnInit(): void {
    this.typingText = this.elementRef.nativeElement.querySelector('.text-digitado p');
    this.randomParagraph();
    this.inpField = this.elementRef.nativeElement.querySelector('.principal-jogo .input-field');

    this.inpField.addEventListener('click', () => {
      this.timer = setInterval(() => {
        this.initTimer();
      }, 1000) as any;
    });

    this.inpField.addEventListener('input', this.initTyping.bind(this));
  }



}

