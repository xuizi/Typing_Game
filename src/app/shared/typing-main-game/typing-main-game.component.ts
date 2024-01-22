import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'typing-main-game',
  templateUrl: './typing-main-game.component.html',
  styleUrls: ['./typing-main-game.component.scss']
})
export class TypingMainGameComponent implements OnInit {

  // public controleStart: boolean = true;
  // public controleJogoPrincipal: boolean = false;

  // public paragraphs:Array<string> = [
  //   'O pôr do sol pintava o céu com tonalidades quentes e vibrantes, enquanto as ondas do mar quebravam suavemente na praia deserta, criando uma atmosfera de paz e serenidade que envolvia os presentes num abraço acolhedor da natureza.',
  //   'No jardim, as flores exalavam um perfume doce e envolvente, atraindo borboletas coloridas que dançavam no ar. As crianças riam e brincavam, criando memórias felizes que seriam guardadas no coração para sempre.',
  //   'Sob o céu estrelado, os amantes caminhavam de mãos dadas, compartilhando segredos e sonhos enquanto a lua iluminava o caminho à frente. O vento sussurrava palavras de carinho, tornando aquele momento mágico e eterno.',
  //   'O aroma de pão fresco e café recém-preparado enchia a padaria, convidando os clientes a saborear as delícias da manhã. O padeiro sorria calorosamente, orgulhoso de suas criações que traziam conforto e alegria à comunidade.',
  //   'Nas montanhas imponentes, a neve brilhava como diamantes sob o sol radiante. Os esquiadores deslizavam pela encosta, sentindo a adrenalina e a liberdade que só a natureza selvagem poderia proporcionar.',
  //   'No mercado movimentado, os comerciantes anunciavam suas mercadorias com entusiasmo, oferecendo frutas frescas, especiarias exóticas e artesanatos coloridos. Os clientes exploravam cada canto, absorvendo a energia vibrante e as histórias contadas pelos produtos à venda.',
  //   'No estúdio de arte, pincéis dançavam sobre a tela, dando vida a um mundo de cores e formas. O artista se entregava à sua paixão, expressando emoções e visões que transcendiam o comum, convidando os observadores a mergulharem na sua imaginação.',
  //   'O voo do pássaro cortou o céu como um raio de luz, demonstrando uma graça e liberdade que inspiravam os espectadores. Suas asas batiam em harmonia com o vento, criando uma coreografia aérea que parecia desafiar as leis da física.',
  //   'Na biblioteca silenciosa, os livros eram guardiões de conhecimento e aventuras infinitas. Cada prateleira era um portal para mundos distintos, convidando os leitores a explorarem terras desconhecidas e a conhecerem personagens fascinantes que povoavam as páginas.',
  //   'Na rua movimentada, o som dos passos e vozes se fundiam em uma sinfonia urbana. As luzes da cidade brilhavam intensamente, criando um espetáculo de cores e vida que celebrava a diversidade e a energia pulsante do ambiente urbano.',
  // ] 

  // public textoDigitado:any = '';
  // @ViewChild('inputField') inputField!: ElementRef;

  // public randomParagraph() {
  //   let randIndex = Math.floor(Math.random() * this.paragraphs.length);
  //   this.paragraphs[randIndex].split("").forEach(span => {
  //       let spanTag = `${span}`;
  //       this.textoDigitado += spanTag;
  //   })
  // } 

  // public initTyping() {
  //   const characters = this.textoDigitado.querySelectorAll("span");
  //   let typedChar = this.inputField;
  //   console.log(typedChar)
  // }

  // public setControlStart() {
  //   this.controleStart = false;
  // }

  // public setControlTextArea() {
  //   this.controleJogoPrincipal = true;
  // }

  // public setMultipleControls() {
  //   this.setControlStart();
  //   this.setControlTextArea();
  //   this.randomParagraph();
  // }

  ngOnInit(): void {
  }

  // ngAfterViewInit(): void {
  //   this.inputField.nativeElement.addEventListener('input', this.initTyping.bind(this));
  // }

}
