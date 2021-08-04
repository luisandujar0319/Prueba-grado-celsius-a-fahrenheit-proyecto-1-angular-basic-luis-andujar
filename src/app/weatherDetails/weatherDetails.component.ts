import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  city: any;
  cityDetails: any;
  showNoResult: boolean = false;
  hideDetails: boolean = false;

  ngOnInit() {

  }

  cityChange(value: string) {
    if(value) {

      let foudnCity = this.weatherData.find(city => (city.name.toLowerCase() === value.toLowerCase()));
      if(foudnCity) {

        this.cityDetails = foudnCity;
        this.hideDetails = true;
        this.showNoResult = false;

      } else {
        this.hideDetails = false;
        this.showNoResult = true;
      }
    } else {

      this.hideDetails = false;
      this.showNoResult = false;
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}