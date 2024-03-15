import { Component } from '@angular/core';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  //headerItems : any[]=[];
  headerItems = [
    { label: 'Home', isHovered: false, subItems: [] },
    { label: 'About', isHovered: false, subItems: [] },
    { label: 'Services', isHovered: false, subItems: [{ label: 'Service 1', link: '/service1' }, { label: 'Service kkkhkhkhkh2', link: '/service2' }] },
    { label: 'Careers', isHovered: false, subItems: [] },
    { label: 'Contact Us', isHovered: false, subItems: [] },
    // Add more items as needed
  ];
  constructor(private itemsService: HeaderService) { }

  ngOnInit(): void {
    this.itemsService.readAll().subscribe(result => {
      this.headerItems = result.items;
    });
  }

  showMenu(item: any) {
    item.isHovered = true;
  }

  hideMenu(item: any) {
    item.isHovered = false;
  }
}
