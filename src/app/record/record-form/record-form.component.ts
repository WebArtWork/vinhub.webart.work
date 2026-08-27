import { Component, computed, inject, input, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CarService } from '../../car/car.service';
import { CarRecord } from '../record.interface';
import { RecordFormModel } from './record-form.interface';
import { recordFormSchema } from './record-form.schema';

@Component({
	selector: 'app-record-form',
	imports: [
		FormField,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		DatePickerModule,
		TranslateDirective,
	],
	templateUrl: './record-form.component.html',
	styleUrl: './record-form.component.scss',
})
export class RecordFormComponent {
	private readonly _carService = inject(CarService);

	readonly record = input<CarRecord>();
	readonly saved = output<RecordFormModel>();

	protected readonly cars = computed(() => this._carService.cars());
	protected readonly types = ['service', 'repair', 'accident', 'ownership_transfer', 'inspection'];

	private readonly _initialModel = computed<RecordFormModel>(() => {
		const r = this.record();
		return {
			carId: r?.carId ?? '',
			type: r?.type ?? 'service',
			title: r?.title ?? '',
			description: r?.description ?? '',
			mileage: r?.mileage ?? 0,
			date: r?.date ?? '',
			cost: r?.cost ?? null,
			sourceName: r?.sourceName ?? '',
		};
	});

	readonly recordModel = signal<RecordFormModel>(this._initialModel());
	readonly recordForm = form(this.recordModel, recordFormSchema);
	readonly isSubmitDisabled = computed(() => this.recordForm().invalid());

	wFormSubmit(): void {
		submit(this.recordForm, (formTree) => {
			this.saved.emit(formTree().value() as RecordFormModel);
			return Promise.resolve();
		});
	}
}
