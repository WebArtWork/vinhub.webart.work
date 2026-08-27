import { Component, computed, inject, input, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { DealershipService } from '../../dealership/dealership.service';
import { Salesperson } from '../salesperson.interface';
import { salespersonFormSchema } from './salesperson-form.schema';

@Component({
	selector: 'app-salesperson-form',
	imports: [FormField, ButtonModule, InputTextModule, SelectModule, TranslateDirective],
	templateUrl: './salesperson-form.component.html',
	styleUrl: './salesperson-form.component.scss',
})
export class SalespersonFormComponent {
	private readonly _dealershipService = inject(DealershipService);

	readonly salesperson = input<Salesperson>();
	readonly saved = output<Salesperson>();

	protected readonly dealerships = computed(() => this._dealershipService.dealerships());

	private readonly _initialModel = computed<Salesperson>(() => {
		const s = this.salesperson();
		return {
			_id: s?._id ?? '',
			name: s?.name ?? '',
			dealershipId: s?.dealershipId ?? '',
			title: s?.title ?? '',
			phone: s?.phone ?? '',
			email: s?.email ?? '',
			avatar: s?.avatar ?? '',
			rating: s?.rating ?? 0,
			dealsClosed: s?.dealsClosed ?? 0,
		};
	});

	readonly salespersonModel = signal<Salesperson>(this._initialModel());
	readonly salespersonForm = form(this.salespersonModel, salespersonFormSchema);
	readonly isSubmitDisabled = computed(() => this.salespersonForm().invalid());

	wFormSubmit(): void {
		submit(this.salespersonForm, (formTree) => {
			this.saved.emit(formTree().value() as Salesperson);
			return Promise.resolve();
		});
	}
}
