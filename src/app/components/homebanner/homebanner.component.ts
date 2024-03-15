import { Component, ViewChild } from '@angular/core';
import { HomebannerService } from '../../services/homebanner.service';
import { config } from '../../config';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrl: './homebanner.component.scss',
})
export class HomebannerComponent {
  banners: any[] = [];
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  constructor(private itemsService: HomebannerService) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      this.banners = result.items;
      console.log(this.banners);
    });
  }

  getImageUrl(imageUrl: any): string {
    return config.apiUrl + '/' + imageUrl;
  }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1  // Display one item on screens smaller than 600px
      },
      600: {
        items: 1  // Display one item on screens between 600px and 992px
      },
      992: {
        items: 1  // Display one item on screens larger than 992px
      }
    },
  };

}

