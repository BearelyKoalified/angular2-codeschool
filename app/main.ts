import { NgModule, Component} from "angular2/core";
import { BrowserModule } from '@angular/platfor-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    template: '<h1>Ultra Racing</h1>'
})
class AppComponent{ }


@NgModule({
    //list of all components within the module
    declarations: [ AppComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]
})
class AppModule{}

platformBrowserDynamic()
    .bootstrapModule(AppModule);