import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
    @Input() user: string;
    @Output() clicked = new EventEmitter<any>();
    @ViewChild('myParagpraph') myParagpraph: any;
  constructor() { }

  ngOnInit() {
  }

    btnClicked(e) {
        console.log(this.myParagpraph);
        this.clicked.emit({
            hello: 'hey'
        });
    }

}
