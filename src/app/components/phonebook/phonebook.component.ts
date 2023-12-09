import { PhoneService } from './../../services/phone.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrl: './phonebook.component.css'
})
export class PhonebookComponent {
  public phonebooks: any = [];


  constructor(public phoneService: PhoneService) {}

  async ngOnInit() {
    this.reload();
  }

  async reload() {
    this.phonebooks = await this.phoneService.Get();
  }
}
