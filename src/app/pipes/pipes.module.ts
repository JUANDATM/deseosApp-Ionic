import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';



@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports: [FiltroCompletadoPipe]
})
export class PipesModule { }
