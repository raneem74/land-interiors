import { Component } from '@angular/core';
import { OurteamService } from '../../services/ourteam.service';
import { config } from '../../config';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrl: './ourteam.component.scss',
  animations: [
    trigger('fadeInOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OurteamComponent {

  ourTeam: any[] = [];

  constructor(private itemsService: OurteamService) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      console.log(this.ourTeam);
      this.ourTeam = result.items;
      this.ourTeam.sort((a, b) => {
        if (a.title === 'CEO') {
          return -1; // CEO comes first
        } else if (b.title === 'CEO') {
          return 1; // CEO comes first
        } else {
          return 0; // Preserve order for non-CEO members
        }
      });
    });
  }
  getImageUrl(imageUrl: any): string {
    return config.apiUrl + '/' + imageUrl;
  }
}
