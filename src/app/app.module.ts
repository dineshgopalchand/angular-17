import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';
import { CoursesService } from './course/services/courses.service';
import { DataBindingEventComponent } from './data-binding-event/data-binding-event.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { TopicsComponent } from './topics/topics.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './common/pipes/summary.pipe';
import { TextFormatPipe } from './common/pipes/text-format.pipe';
import { ItemShowComponent } from './item-show/item-show.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BasicThemeComponent } from './common/theme/basic-theme/basic-theme.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './common/directive/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingEventComponent,
    EventBindingComponent,
    TopicsComponent,
    PipeComponent,
    SummaryPipe,
    TextFormatPipe,
    ItemShowComponent,
    ItemListComponent,
    BasicThemeComponent,
    HeaderComponent,
    FooterComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
