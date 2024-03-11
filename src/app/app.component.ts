import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const docRef = doc(db, 'cities', 'SF');
const docSnap = await getDoc(docRef);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firebase_church';
}

if (docSnap.exists()) {
  console.log('Document data:', docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log('No such document!');
}
