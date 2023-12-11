import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'
import { importProvidersFrom } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { provideStore } from '@ngrx/store';

//Reducers
import { filtersReducer, productsReducer } from "./app/components/shared/state/products.reducer";
import { cartReducer } from "./app/components/shared/state/cart.reducers";
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, {providers:[
    provideRouter(routes),
    provideStore({products: productsReducer, cart: cartReducer, filters: filtersReducer}),
    provideHttpClient(),
    importProvidersFrom([BrowserAnimationsModule]),
]})