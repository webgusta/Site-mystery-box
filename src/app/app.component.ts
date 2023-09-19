import * as firebase from 'firebase/app'
import { Component,OnInit } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mystery-box';

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyDLZpzppDx-E2NUxqXEuYCqgshmHLEEFwA",
      authDomain: "mystery-box-70609.firebaseapp.com",
      projectId: "mystery-box-70609",
      storageBucket: "mystery-box-70609.appspot.com",
      messagingSenderId: "95319109453",
      appId: "1:95319109453:web:c955a5a5b7760493a19104",
      measurementId: "G-ZTE1Q9R39X"
    };
    
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  }
}
