import { Component } from '@angular/core';
import { FirebaseMessaging, GetTokenOptions } from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  public token = '';

  constructor() {
    FirebaseMessaging.addListener('notificationReceived', (event) => {
      console.log('notificationReceived: ', { event });
    });
    FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
      console.log('notificationActionPerformed: ', { event });
    });
    if (Capacitor.getPlatform() === 'web') {
      navigator.serviceWorker.addEventListener('message', (event: any) => {
        console.log('serviceWorker message: ', { event });
      });
    }
  }

  public async requestPermissions(): Promise<void> {
    await FirebaseMessaging.requestPermissions();
  }

  public async getToken(): Promise<void> {
    const options: GetTokenOptions = {
      vapidKey: environment.firebase.vapidKey
    }
    if (Capacitor.getPlatform() === 'web') {
      options.serviceWorkerRegistration = await navigator.serviceWorker.register('firebase-messaging-sw.js');
    }
    const { token } = await FirebaseMessaging.getToken(options);
    this.token = token;
  }
}
