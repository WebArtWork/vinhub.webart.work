import { Component, computed, input, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Dealership } from '../dealership.interface';
import { dealershipFormSchema } from './dealership-form.schema';

@Component({
	selector: 'app-dealership-form',
	imports: [FormField, ButtonModule, InputTextModule, InputNumberModule, TranslateDirective],
	templateUrl: './dealership-form.component.html',
	styleUrl: './dealership-form.component.scss',
})
export class DealershipFormComponent {
	readonly dealership = input<Dealership>();
	readonly saved = output<Dealership>();

	private readonly _initialModel = computed<Dealership>(() => {
		const d = this.dealership();
		return {
			_id: d?._id ?? '',
			name: d?.name ?? '',
			address: d?.address ?? '',
			city: d?.city ?? '',
			state: d?.state ?? '',
			phone: d?.phone ?? '',
			email: d?.email ?? '',
			logo: d?.logo ?? '',
			lat: d?.lat ?? 0,
			lng: d?.lng ?? 0,
			rating: d?.rating ?? 0,
		};
	});

	readonly dealershipModel = signal<Dealership>(this._initialModel());
	readonly dealershipForm = form(this.dealershipModel, dealershipFormSchema);
	readonly isSubmitDisabled = computed(() => this.dealershipForm().invalid());

	wFormSubmit(): void {
		submit(this.dealershipForm, (formTree) => {
			this.saved.emit(formTree().value() as Dealership);
			return Promise.resolve();
		});
	}
}
