import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor() {
    this.initializeFirebase();
  }

  public async initializeFirebase(): Promise<void> {
    if (Capacitor.isNativePlatform()) {
      return;
    }
    initializeApp(environment.firebase);
  }
}
