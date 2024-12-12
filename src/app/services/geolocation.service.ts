import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root',
})
export class GeolocatorService {
  constructor(private http: HttpClient) {}

  async getCurrentPosition() {
    let attrs = { enableHighAccuracy: true };

    const coordinates = await Geolocation.getCurrentPosition(attrs);

    return coordinates;
  }

  async getCurrentPositionName() {
    const apiUrl = 'https://nominatim.openstreetmap.org/reverse';
    const position = await this.getCurrentPosition();

    const url = `${apiUrl}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
    return this.http.get(url);
  }
}
