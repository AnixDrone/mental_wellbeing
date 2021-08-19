import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-depresija',
  templateUrl: './depresija.component.html',
  styleUrls: ['./depresija.component.scss']
})
export class DepresijaComponent implements OnInit {

  constructor() {}
  options: string[] = ['Тотално се согласувам', 'Делумно се согласувам', 'Делумно не се согласувам', 'Тотално не се согласувам'];
  option_selected_question_1:string='';
  option_selected_question_2:string='';
  test_done:boolean=false;
  ngOnInit() {

  }

}
