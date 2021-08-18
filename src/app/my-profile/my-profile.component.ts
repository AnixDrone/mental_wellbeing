import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ime_prezime = 'Мартин Каранфилоски'
  godini = 22;
  zivealiste = 'Аеродром, Скопје ,Р.С Македонија'
  rabotenOdnos = 'Невработен студент на Економски Факултет при УКИМ'
  email = 'martin.karan@yahoo.com'
  osobini=['Средно познавање на компјутери','Активен на социјални мрежи','Живеам со родителите']

  list_to_string(l:string[]){
    let res=''
    for (let i = 0; i <l.length ; i++) {
      res+=`</h1> <h1 style="tab-size: 4"> &emsp;&emsp;&emsp;&emsp;-${l[i]} </h1>`
    }
    return res
  }

  osnovni_podatoci = '' +
    '<h1>\n' +
    `          <b>Име и презиме :</b> ${this.ime_prezime} \n` +
    '        </h1>\n' +
    '        <h1>\n' +
    `          <b>Возраст: </b>${this.godini}  години\n` +
    '        </h1>\n' +
    '        <h1>\n' +
    `          <b>Живеалиште:</b> ${this.zivealiste}\n` +
    '        </h1>\n' +
    '        <h1>\n' +
    `          <b>Работен однос</b> ${this.rabotenOdnos}\n` +
    '        </h1>\n' +
    '        <h1>\n' +
    `          <b>email адреса:</b> ${this.email}\n` +
    '        </h1>'+`<h1><b>Особини:</b> </h1> ${this.list_to_string(this.osobini)}`
  testovi=`<h1> Направен <b>Тест за депресија</b></h1>  \n<h1> <b>Резултати:</b> Можни шанси за депресија </h1><h1>\n <b>Симптоми:</b></h1> <h1> &emsp;&emsp;&emsp;\n -Постојано несреќен</h1><h1> &emsp;&emsp;&emsp;\n Недовлоно спиење </h1><h1>\n&emsp;&emsp;&emsp; Потфрлување на некои обрски</h1> \n<h1> &emsp;&emsp;&emsp;-Нонстоп активен на социјални мрежи, без физичка средба со пријатели</h1>`

  description=this.osnovni_podatoci;

}
