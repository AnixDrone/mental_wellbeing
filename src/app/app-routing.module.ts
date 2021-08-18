import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestingsComponent} from "./testings/testings.component";
import {CitatiComponent} from "./citati/citati.component";
import {PrikazniComponent} from "./prikazni/prikazni.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {DepresijaComponent} from "./depresija/depresija.component";


const routes: Routes = [
  {path: 'testing', component: TestingsComponent},
  {path: 'testing/depresija', component: DepresijaComponent},
  {path: 'citati', component: CitatiComponent},
  {path: 'prikazni', component: PrikazniComponent},
  {path: 'my-profile', component: MyProfileComponent},
  {path: '', redirectTo: '/testing', pathMatch: 'full'},
  {path: '**', redirectTo: '/testing', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
