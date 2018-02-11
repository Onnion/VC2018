import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-saparator',
  templateUrl: './saparator.component.html',
  styleUrls: ['./saparator.component.css']
})
export class SaparatorComponent implements OnInit {

  @Input('color') color: string;

  @Input('position') position: string;
  @Input('final') final: boolean;
  
  public classSeparator: String;

  constructor() { }

  ngAfterViewInit() {
    if(this.final){
      this.classSeparator = 'final';
    }else{
      this.classSeparator = this.color + ' ' + this.position;
    }
  }

  ngOnInit() {
  }

}
