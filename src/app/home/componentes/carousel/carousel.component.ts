import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
 slidesPerView: 1,
 autoplay: true
  };
  constructor(private router: Router) { }

  ngOnInit() {}


  public pushUpLoad() {
    this.router.navigate(['/up-load']);
  }

}
