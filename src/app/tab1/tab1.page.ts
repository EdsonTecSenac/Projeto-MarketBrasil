// Importe o Router do módulo '@angular/router'
import { Component, QueryList, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements AfterViewInit {
  @ViewChildren('galleryImage') images!: QueryList<ElementRef>;
  currentImageIndex: number = 0;
  likes: number = 0;

  // Injete o Router no construtor
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Inicializar a exibição da primeira imagem após a view ser inicializada.
    const imagesArray = this.images.toArray();
    // Definir todas as imagens para display: none
    imagesArray.forEach(image => (image.nativeElement.style.display = 'none'));
    // Exceto a primeira imagem.
    if (imagesArray.length) {
      imagesArray[this.currentImageIndex].nativeElement.style.display = 'block';
    }
  }

  // Navegar para a próxima imagem
  nextImage() {
    this.changeImage((this.currentImageIndex + 1) % this.images.length);
  }

  // Navegar para a imagem anterior
  previousImage() {
    this.changeImage((this.currentImageIndex - 1 + this.images.length) % this.images.length);
  }

  // Mostrar uma imagem específica com base no índice
  showImage(index: number) {
    this.changeImage(index);
  }

  // Alterar a imagem visível
  private changeImage(newIndex: number) {
    const imagesArray = this.images.toArray();
    imagesArray[this.currentImageIndex].nativeElement.style.display = 'none';
    this.currentImageIndex = newIndex;
    imagesArray[this.currentImageIndex].nativeElement.style.display = 'block';
  }

  // Incrementar o contador de curtidas
  addLikes() {
    this.likes++;
  }

  // Navegar para outra página quando clicar na imagem com o índice 2
  navigateToTab2() {
    this.router.navigate(['/tabs/tab2']);
  }
}
