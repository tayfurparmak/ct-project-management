import { ToastrService } from 'ngx-toastr';
import { PhoneService } from './../../services/phone.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-phonebookadd',
  templateUrl: './phonebookadd.component.html',
  styleUrl: './phonebookadd.component.css'
})
export class PhonebookaddComponent {
  public phonebook: any = {};

  constructor(
    private phoneService: PhoneService,
    private toastr: ToastrService
  ) {}

  save() {
    this.phoneService.Add(this.phonebook);
    this.phonebook = {};
    this.toastr.success('Saved!');
  }
}
