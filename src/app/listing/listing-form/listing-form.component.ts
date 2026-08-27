import { Component, computed, inject, input, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CarService } from '../../car/car.service';
import { Listing } from '../listing.interface';
import { ListingFormModel } from './listing-form.interface';
import { listingFormSchema } from './listing-form.schema';

@Component({
	selector: 'app-listing-form',
	imports: [
		FormField,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './listing-form.component.html',
	styleUrl: './listing-form.component.scss',
})
export class ListingFormComponent {
	private readonly _carService = inject(CarService);

	readonly listing = input<Listing>();
	readonly saved = output<ListingFormModel>();

	protected readonly cars = computed(() => this._carService.cars());
	protected readonly kinds = ['sale', 'rental'];
	protected readonly statuses = ['active', 'pending', 'sold', 'rented', 'expired'];
	protected readonly rentalPeriods = ['day', 'week', 'month'];

	private readonly _initialModel = computed<ListingFormModel>(() => {
		const l = this.listing();
		return {
			carId: l?.carId ?? '',
			kind: l?.kind ?? 'sale',
			status: l?.status ?? 'active',
			price: l?.price ?? 0,
			currency: l?.currency ?? 'USD',
			rentalPeriod: l?.rentalPeriod ?? '',
			title: l?.title ?? '',
			description: l?.description ?? '',
		};
	});

	readonly listingModel = signal<ListingFormModel>(this._initialModel());
	readonly listingForm = form(this.listingModel, listingFormSchema);
	readonly isSubmitDisabled = computed(() => this.listingForm().invalid());

	wFormSubmit(): void {
		submit(this.listingForm, (formTree) => {
			this.saved.emit(formTree().value() as ListingFormModel);
			return Promise.resolve();
		});
	}
}
