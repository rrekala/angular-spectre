import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgsBreadcrumbComponent, NgsBreadcrumbItemComponent } from './breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgsBreadcrumbComponent, NgsBreadcrumbItemComponent],
  exports: [NgsBreadcrumbComponent, NgsBreadcrumbItemComponent]
})
export class NgsBreadcrumbsModule { }
