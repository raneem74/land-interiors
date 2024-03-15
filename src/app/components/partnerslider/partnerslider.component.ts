import { Component, OnInit } from '@angular/core';
import { PartnerslideService } from '../../services/partnerslide.service';
import { config } from '../../config';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-partnerslider',
  templateUrl: './partnerslider.component.html',
  styleUrls: ['./partnerslider.component.scss'],
  // animations: [
  //   trigger('slideFromBottom', [
  //     transition(':enter', [
  //       style({ transform: 'translateY(100%)' }),
  //       animate('500ms ease-out', style({ transform: 'translateY(0)' }))
  //     ])
  //   ])
  // ]
})
export class PartnerSliderComponent implements OnInit {
  partnerLogos: any[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  };

  constructor(private itemsService: PartnerslideService) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      this.partnerLogos = result.items;
    });
  }

  getImageUrl(imageUrl: any): string {
    return config.apiUrl + '/' + imageUrl;
  }
}
