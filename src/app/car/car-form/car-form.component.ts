import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Car } from '../car.interface';
import { CarFormModel } from './car-form.interface';

@Component({
	selector: 'app-car-form',
	imports: [
		FormsModule,
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

	protected readonly types = [
		'sedan',
		'suv',
		'hatchback',
		'coupe',
		'truck',
		'van',
	];
	protected readonly transmissions = ['automatic', 'manual'];
	protected readonly fuelTypes = ['petrol', 'diesel', 'electric', 'hybrid'];
	protected readonly conditions = ['new', 'used'];

	readonly model = signal<CarFormModel>(this._initialModel());

	readonly isSaveDisabled = computed(() => {
		const model = this.model();
		return (
			!model.make.trim() ||
			!model.model.trim() ||
			!model.vin.trim() ||
			model.price <= 0
		);
	});

	updateModel<K extends keyof CarFormModel>(
		key: K,
		value: CarFormModel[K],
	): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		if (this.isSaveDisabled()) return;
		this.saved.emit(this.model());
	}

	private _initialModel(): CarFormModel {
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
	}
}
