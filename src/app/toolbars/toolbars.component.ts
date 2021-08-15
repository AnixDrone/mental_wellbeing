import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.scss']
})
export class ToolbarsComponent implements OnInit {

  constructor() {
  }



  ngOnInit(): void {
    this.play_button = true;
    this.play_text = 'play_arrow'
  }
  play_button: boolean=true;
  play_text: string='';
  click_play() {

    if (this.play_button) {
      this.play_button = false;
      this.play_text = 'pause'
    }
    else{
      this.play_button = true;
      this.play_text = 'play_arrow'
    }
  }

}
