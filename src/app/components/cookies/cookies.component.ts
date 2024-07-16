import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentConfig, NgcCookieConsentService, NgcInitializationErrorEvent, NgcInitializingEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent, provideNgcCookieConsent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

// Definir los dominios permitidos
const allowedDomains = [
  'localhost',
  'openings-anime-quiz.vercel.app',
  'openings-anime-quiz-git-master-franmicars-projects.vercel.app',
  'openings-anime-quiz-h5aih8t5d-franmicars-projects.vercel.app'
];

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'
  },
  position: 'bottom',
  theme: 'classic',
  palette: {
    popup: {
      background: '#f7f7f7',
      text: '#333333',
      link: '#007bff'
    },
    button: {
      background: '#007bff',
      text: '#ffffff'
    }
  },
  content: {
    message: 'Este sitio web utiliza cookies para guardar tus respuestas. Ten en cuenta que si borras las cookies, se reiniciará el quiz.',
    dismiss: 'Aceptar',
    deny: '',
    link: '',
    href: 'https://ejemplo.com/politica-de-cookies',
    policy: 'Política de cookies',
    target: '_blank'
  }
};

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  providers: [provideNgcCookieConsent(cookieConfig)],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss'
})
export class CookiesComponent implements OnInit, OnDestroy {

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  currentHostname = window.location.hostname;

  constructor(private ccService: NgcCookieConsentService) { }

  ngOnInit() {
    this.subscribers();
    // Verificar si el hostname actual está en la lista de dominios permitidos
    if (allowedDomains.includes(this.currentHostname)) {
      if (cookieConfig && cookieConfig.cookie) cookieConfig.cookie.domain = this.currentHostname;
    }
  }

  private subscribers() {
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.initializingSubscription = this.ccService.initializing$.subscribe(
      (event: NgcInitializingEvent) => {
        // the cookieconsent is initilializing... Not yet safe to call methods like `NgcCookieConsentService.hasAnswered()`
        console.log(`initializing: ${JSON.stringify(event)}`);
      });

    this.initializedSubscription = this.ccService.initialized$.subscribe(
      () => {
        // the cookieconsent has been successfully initialized.
        // It's now safe to use methods on NgcCookieConsentService that require it, like `hasAnswered()` for eg...
        console.log(`initialized: ${JSON.stringify(event)}`);
      });

    this.initializationErrorSubscription = this.ccService.initializationError$.subscribe(
      (event: NgcInitializationErrorEvent) => {
        // the cookieconsent has failed to initialize...
        console.log(`initializationError: ${JSON.stringify(event.error?.message)}`);
      });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...
      });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
      });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }

}
