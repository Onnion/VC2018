import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  private API_URL = environment.API_URL;
  
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
          this.http.post(this.API_URL + 'email', this.contact_form).subscribe((result: any) => {
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
