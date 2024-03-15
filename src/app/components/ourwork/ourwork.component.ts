import { Component } from '@angular/core';
import { OurworkService } from '../../services/ourwork.service';
import { config } from '../../config';

@Component({
  selector: 'app-ourwork',
  templateUrl: './ourwork.component.html',
  styleUrl: './ourwork.component.scss'
})
export class OurworkComponent {
  ourWork: any[] = [];
  ourProjects : any[]=[];
  ourCaseStudies: any[]=[];

  constructor(private itemsService: OurworkService) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      this.ourWork = result.items;
       // Filter projects
    this.ourProjects = result.items.filter(item => item.type === 'Project');
    // Filter case studies
    this.ourCaseStudies = result.items.filter(item => item.type === 'Case study');
    });
  }

  getImageUrl(imageUrl: any): string {
    return config.apiUrl + '/' + imageUrl;
  }
}
