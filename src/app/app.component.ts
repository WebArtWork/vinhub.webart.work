import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ToastModule } from '@wawjs/ngx-prime/toast';
import { SessionBridgeService } from './auth/session-bridge.service';
import { ThemeState } from './theme/theme-state';

@Component({
	imports: [RouterOutlet, ToastModule],
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [MessageService],
})
export class AppComponent {
	private readonly _httpService = inject(UserService);
	private readonly _sessionBridge = inject(SessionBridgeService);
	// Injected so its constructor runs (and restores/applies the persisted
	// theme to <html>) on every page, not just when something happens to
	// render a component that reads ThemeState.
	private readonly _themeState = inject(ThemeState);

	constructor() {
		// Pulls a session from another already-logged-in *.webart.work app,
		// if this app doesn't already have a token of its own.
		this._sessionBridge.init();
	}
}
