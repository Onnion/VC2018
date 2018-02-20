import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  private API_URL_DEV = 'http://localhost:3000/api/';
  private API_URL = 'https://vc-2018-api.herokuapp.com/api/';
  
  public contact_form = {
    'name': null,
    'subject': null,
    'message': null,
    'email': null
  }

  public status_email = {
    'send': null,
    'sending': null,
    'error_send': null,
    'pre_send': true
  }

  constructor( private http: Http) { }

  ngOnInit() {
  }

  sendMail() {
    
        if (
          this.contact_form.email && this.contact_form.name &&
          this.contact_form.message && this.contact_form.subject) {
    
          this.status_email.pre_send = false;
          this.status_email.sending = true;
          this.http.post(this.API_URL_DEV + 'email', this.contact_form).subscribe((result: any) => {
            this.status_email.sending = false;
            this.status_email.send = true;
    
            this.contact_form.email = null;
            this.contact_form.name = null;
            this.contact_form.subject = null;
            this.contact_form.message = null;
    
          });
    
        } else {
          this.status_email.pre_send = false;
          this.status_email.error_send = true;
          setTimeout(() => {
            this.status_email.pre_send = true;
            this.status_email.error_send = false;
          },1000)
        }
    
    
    
      }
}
