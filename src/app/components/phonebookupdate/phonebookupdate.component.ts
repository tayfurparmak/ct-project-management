import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-phonebookupdate',
  templateUrl: './phonebookupdate.component.html',
  styleUrl: './phonebookupdate.component.css',
})
export class PhonebookupdateComponent {
  public phonebook: any = {};
  public id = '';
  constructor(
    private router:Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private phoneService: PhoneService
  ) {}
  async ngOnInit() {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.phonebook = await this.phoneService.GetById(Number(this.id));
  }
  async save() {
    await this.phoneService.Update(Number(this.id),this.phonebook);
    this.toastr.success('Updated');
    this.router.navigate(["/phonebook"]);
  }
}
