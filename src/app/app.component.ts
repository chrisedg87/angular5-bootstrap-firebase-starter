import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Useful Links Admin';
  items: Observable<any[]>;
  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
  	this.afAuth.auth.signInAnonymously();
  	this.items = db.collection('links').valueChanges();
  }
}
