import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testings',
  templateUrl: './testings.component.html',
  styleUrls: ['./testings.component.scss']
})
export class TestingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  testovi=['депресија','анкиозност','аутизам','биполарност','стрес','шизофренија','бактериофобија','деменција','мизофобија','клаустрофобија']
  //testovi1=['шизофренија','бактериофобија','деменција','мизофобија','клаустрофобија']
  //testovi2=['таласофобија','хемофобија','акрофобија','аерофобија','арахнофобија']
}
