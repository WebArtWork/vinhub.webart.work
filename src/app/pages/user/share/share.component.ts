import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { MessageService } from '@wawjs/ngx-prime/api';
import { environment } from '@env';
import { QrCodeComponent } from '../../../shared/qr-code/qr-code.component';

export type ShareKind = 'app' | 'profile';

@Component({
	selector: 'app-share',
	imports: [ButtonModule, QrCodeComponent, RouterLink],
	templateUrl: './share.component.html',
	styleUrl: './share.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharePageComponent {
	private readonly _messageService = inject(MessageService);
	private readonly _activatedRoute = inject(ActivatedRoute);

	readonly kind = toSignal(
		this._activatedRoute.data.pipe(map((data) => (data['shareKind'] as ShareKind) ?? 'app')),
		{
			initialValue: (this._activatedRoute.snapshot.data['shareKind'] as ShareKind) ?? 'app',
		},
	);

	readonly shareUrl = computed(() => {
		if (this.kind() === 'profile') {
			return `${environment.url}/profile`;
		}
		return `${environment.url}/sign`;
	});

	readonly title = computed(() =>
		this.kind() === 'profile' ? 'Share profile' : 'Share VIN Hub',
	);

	readonly description = computed(() =>
		this.kind() === 'profile'
			? 'Have people scan this code to open my VIN Hub profile.'
			: 'Scan the code to join VIN Hub in a few seconds.',
	);

	copyLink(): void {
		navigator.clipboard?.writeText(this.shareUrl()).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: 'Link copied',
			});
		});
	}
}
