import { Component, computed, input, output } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Car } from '../car.interface';
import { CarFormModel } from './car-form.interface';
import { carFormSchema } from './car-form.schema';

@Component({
	selector: 'app-car-form',
	imports: [
		FormField,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './car-form.component.html',
	styleUrl: './car-form.component.scss',
})
export class CarFormComponent {
	readonly car = input<Car>();
	readonly saved = output<CarFormModel>();

	protected readonly types = ['sedan', 'suv', 'hatchback', 'coupe', 'truck', 'van'];
	protected readonly transmissions = ['automatic', 'manual'];
	protected readonly fuelTypes = ['petrol', 'diesel', 'electric', 'hybrid'];
	protected readonly conditions = ['new', 'used'];

	private readonly _initialModel = computed<CarFormModel>(() => {
		const c = this.car();
		return {
			make: c?.make ?? '',
			model: c?.model ?? '',
			year: c?.year ?? new Date().getFullYear(),
			vin: c?.vin ?? '',
			type: c?.type ?? 'sedan',
			price: c?.price ?? 0,
			currency: c?.currency ?? 'USD',
			mileage: c?.mileage ?? 0,
			color: c?.color ?? '',
			transmission: c?.transmission ?? 'automatic',
			fuelType: c?.fuelType ?? 'petrol',
			condition: c?.condition ?? 'used',
			description: c?.description ?? '',
		};
	});

	readonly carModel = signal<CarFormModel>(this._initialModel());
	readonly carForm = form(this.carModel, carFormSchema);
	readonly isSubmitDisabled = computed(() => this.carForm().invalid());

	wFormSubmit(): void {
		submit(this.carForm, (formTree) => {
			this.saved.emit(formTree().value() as CarFormModel);
			return Promise.resolve();
		});
	}
}
