import { Component, computed, input, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CarRequest } from '../request.interface';
import { requestFormSchema } from './request-form.schema';

@Component({
	selector: 'app-request-form',
	imports: [FormField, ButtonModule, InputTextModule, SelectModule, TextareaModule, TranslateDirective],
	templateUrl: './request-form.component.html',
	styleUrl: './request-form.component.scss',
})
export class RequestFormComponent {
	readonly listingId = input<string>('');
	readonly request = input<CarRequest>();
	readonly saved = output<CarRequest>();

	protected readonly kinds = ['buy', 'rent', 'test-drive', 'trade-in'];

	private readonly _initialModel = computed<CarRequest>(() => {
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
	});

	readonly requestModel = signal<CarRequest>(this._initialModel());
	readonly requestForm = form(this.requestModel, requestFormSchema);
	readonly isSubmitDisabled = computed(() => this.requestForm().invalid());

	wFormSubmit(): void {
		submit(this.requestForm, (formTree) => {
			this.saved.emit(formTree().value() as CarRequest);
			return Promise.resolve();
		});
	}
}
