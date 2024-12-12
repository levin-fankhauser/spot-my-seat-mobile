import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PrefrencesService {
  constructor() {}

  async setTheme(isDarkModeEnabled: boolean) {
    await Preferences.set({
      key: 'darkMode',
      value: JSON.stringify({
        isDarkModeEnabled,
      }),
    });
  }

  async isDarkMode() {
    const ret = await Preferences.get({ key: 'darkMode' });

    if (ret.value) {
      return JSON.parse(ret.value).isDarkModeEnabled;
    }
  }
}
