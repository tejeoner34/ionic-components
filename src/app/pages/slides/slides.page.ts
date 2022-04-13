import { Component, OnInit, ViewChild } from '@angular/core';
import Swiper, {SwiperOptions, Pagination} from 'swiper';

@Component({
    selector: 'app-slides',
    templateUrl: './slides.page.html',
    styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

    slides: { img: string, titulo: string, desc: string }[] = [
        {
          img: '/assets/slides/photos.svg',
          titulo: 'Comparte Fotos',
          desc: 'Mira y comparte increíbles fotos de todo el mundo'
        },
        {
          img: '/assets/slides/music-player-2.svg',
          titulo: 'Escucha Música',
          desc: 'Toda tu música favorita está aquí'
        },
        {
          img: '/assets/slides/calendar.svg',
          titulo: 'Nunca olvides nada',
          desc: 'El mejor calendario del mundo a tu disposición'
        },
        {
          img: '/assets/slides/placeholder-1.svg',
          titulo: 'Tu ubicación',
          desc: 'Siempre sabremos donde estás!'
        }
      ];

    public swiperConfig: SwiperOptions = {
        pagination: true,
    }

    constructor() { }

    ngOnInit() {
        Swiper.use([Pagination])
    }



    // onSwiper([swiper]) {
    //     console.log(swiper);
    // }
    // onSlideChange() {
    //     console.log('slide change');
    // }
}
