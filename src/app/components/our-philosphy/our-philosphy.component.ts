import { Component } from '@angular/core';
import { AboutusService } from '../../services/aboutus.service';
import { config } from '../../config';

@Component({
  selector: 'app-our-philosphy',
  templateUrl: './our-philosphy.component.html',
  styleUrl: './our-philosphy.component.scss'
})
export class OurPhilosphyComponent {
  aboutUs : any;
  constructor( private itemsService: AboutusService) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      this.aboutUs = result.items[0];
      console.log(result.items);
    });
  }
  getImageUrl(imageUrl: any): string {
    return config.apiUrl + '/' + imageUrl;
  }
}

