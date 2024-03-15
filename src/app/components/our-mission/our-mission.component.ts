import { Component } from '@angular/core';
import { config } from '../../config';
import { OurMissionService } from '../../services/our-mission.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrl: './our-mission.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OurMissionComponent {
  ourMission;

  constructor(private itemsService: OurMissionService) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      this.ourMission = result.items[0];
    });
  }

  getImageUrl(imageUrl: any): string {
    return config.apiUrl + '/' + imageUrl;
  }
}
