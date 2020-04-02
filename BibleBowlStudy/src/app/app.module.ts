import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';

import { SignalRModule } from 'ng2-signalr';
import { SignalRConfiguration } from 'ng2-signalr';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';

import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { MaterialModule } from './app.angular.material';

// >= v2.0.0
export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'ChatHub';
 // c.qs = { message: 'msg' };
  c.url = 'https://localhost:44315';
  c.logging = true;
  
  // >= v5.0.0
  c.executeEventsInZone = true; // optional, default is true
  c.executeErrorsInZone = false; // optional, default is false
  c.executeStatusChangeInZone = true; // optional, default is true
  return c;
}

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignalRModule.forRoot(createConfig),
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
