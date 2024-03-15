import { Component } from '@angular/core';
import { OurservicesService } from '../../services/ourservices.service';
import { config } from '../../config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.scss'
})
export class OurservicesComponent {
  ourServices: any[] = [];
  router: any;
  hoverIndex: number = -1; // Track hover state

  constructor(private itemsService: OurservicesService,private http: HttpClient) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      this.ourServices = result.items;
      console.log(result.items);
    });
  }

  getImageUrl = (item: any) => item?.imageUrl ? config.apiUrl + '/' + item.imageUrl : false;
  
  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }

}
