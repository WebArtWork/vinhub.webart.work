import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CarRequest } from '../request.interface';

@Component({
	selector: 'app-request-form',
	imports: [
		FormsModule,
		ButtonModule,
		InputTextModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './request-form.component.html',
	styleUrl: './request-form.component.scss',
})
export class RequestFormComponent {
	readonly listingId = input<string>('');
	readonly request = input<CarRequest>();
	readonly saved = output<CarRequest>();

	protected readonly kinds = ['buy', 'rent', 'test-drive', 'trade-in'];

	readonly model = signal<CarRequest>(this._initialModel());

	readonly isSaveDisabled = computed(() => {
		const model = this.model();
		return !model.clientName.trim() || !model.clientEmail.trim();
	});

	updateModel<K extends keyof CarRequest>(
		key: K,
		value: CarRequest[K],
	): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		if (this.isSaveDisabled()) return;
		this.saved.emit(this.model());
	}

	private _initialModel(): CarRequest {
		const r = this.request();
		return {
			_id: r?._id ?? '',
			listingId: r?.listingId ?? this.listingId(),
			kind: r?.kind ?? 'buy',
			status: r?.status ?? 'new',
			clientName: r?.clientName ?? '',
			clientEmail: r?.clientEmail ?? '',
			clientPhone: r?.clientPhone ?? '',
			message: r?.message ?? '',
			createdAt: r?.createdAt ?? '',
		};
	}
}
