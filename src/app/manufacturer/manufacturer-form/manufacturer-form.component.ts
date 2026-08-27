import { Component, computed, input, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Manufacturer } from '../manufacturer.interface';
import { manufacturerFormSchema } from './manufacturer-form.schema';

@Component({
	selector: 'app-manufacturer-form',
	imports: [FormField, ButtonModule, InputTextModule, InputNumberModule, TextareaModule, TranslateDirective],
	templateUrl: './manufacturer-form.component.html',
	styleUrl: './manufacturer-form.component.scss',
})
export class ManufacturerFormComponent {
	readonly manufacturer = input<Manufacturer>();
	readonly saved = output<Manufacturer>();

	private readonly _initialModel = computed<Manufacturer>(() => {
		const m = this.manufacturer();
		return {
			_id: m?._id ?? '',
			name: m?.name ?? '',
			country: m?.country ?? '',
			founded: m?.founded ?? new Date().getFullYear(),
			logo: m?.logo ?? '',
			description: m?.description ?? '',
			website: m?.website ?? '',
		};
	});

	readonly manufacturerModel = signal<Manufacturer>(this._initialModel());
	readonly manufacturerForm = form(this.manufacturerModel, manufacturerFormSchema);
	readonly isSubmitDisabled = computed(() => this.manufacturerForm().invalid());

	wFormSubmit(): void {
		submit(this.manufacturerForm, (formTree) => {
			this.saved.emit(formTree().value() as Manufacturer);
			return Promise.resolve();
		});
	}
}
