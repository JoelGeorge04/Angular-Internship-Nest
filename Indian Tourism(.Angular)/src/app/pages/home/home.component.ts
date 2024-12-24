import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700, 
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 700, 
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  
slidesStore = [
  {
    id: 1,
    src: 'https://up.yimg.com/ib/th?id=OIP.W1-P8PFMrEsfDVAcFitpRwHaFH&pid=Api&rs=1&c=1&qlt=95&w=147&h=102',
    alt: '',
    title: '' 
  },
  {
    id: 2,
    src: 'https://tse1.mm.bing.net/th?id=OIP.NC9w_CEpj9yVpM1KsdAujAHaIE&pid=Api&P=0&h=220',
    alt: '',
    title: ''
  },
  {
    id: 3,
    src: 'https://up.yimg.com/ib/th?id=OIP.hkUj4fuKATcuz30pZC-7KQAAAA&pid=Api&rs=1&c=1&qlt=95&w=123&h=123',
    alt: '',
    title: ''
  },
  {
    id: 4,
    src: 'https://up.yimg.com/ib/th?id=OIP.Vf4aowkq0jsrnMh6R3YLbAAAAA&pid=Api&rs=1&c=1&qlt=95&w=145&h=104',
    alt: '',
    title: ''
  },
  {
    id: 5,
    src: 'https://up.yimg.com/ib/th?id=OIP.e0nKv5txrFVdt33K8RtF6QHaH0&pid=Api&rs=1&c=1&qlt=95&w=109&h=115',
    alt: '',
    title: ''
  }
];

}
