import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private endpoint = 'http://localhost:3000/phonebooks';
  public async Get() {
    return (await axios.get(this.endpoint)).data;
  }
  public Add(phonebook: any) {
    phonebook.id = new Date().getTime();
    axios.post(this.endpoint, phonebook);
  }
  public async Remove(id: number) {
    return await axios.delete(this.endpoint + '/' + id);
  }
  public Update(id: number, phonebook: any) {
    axios.put(this.endpoint + "/" + id, phonebook)
  }
}
