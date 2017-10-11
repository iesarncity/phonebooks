import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhonebooksPage } from './phonebooks';

@NgModule({
  declarations: [
    PhonebooksPage,
  ],
  imports: [
    IonicPageModule.forChild(PhonebooksPage),
  ],
})
export class PhonebooksPageModule {}
