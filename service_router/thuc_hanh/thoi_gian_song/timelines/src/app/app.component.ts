import {Component, NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {TimelinesComponent} from "./timelines/timelines.component";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


  const routes: Routes = [
    {
      path: 'timelines',
      component: TimelinesComponent

    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

export class AppComponent {
}
