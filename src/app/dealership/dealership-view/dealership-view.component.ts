import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from '@wawjs/ngx-prime/card';
import { RatingModule } from '@wawjs/ngx-prime/rating';
import { CarShortComponent } from '../../car/car-short/car-short.component';
import { CarService } from '../../car/car.service';
import { DealershipIconComponent } from '../dealership-icon/dealership-icon.component';
import { Dealership } from '../dealership.interface';

@Component({
	selector: 'app-dealership-view',
	imports: [
		FormsModule,
		CardModule,
		RatingModule,
		DealershipIconComponent,
		CarShortComponent,
	],
	templateUrl: './dealership-view.component.html',
	styleUrl: './dealership-view.component.scss',
})
export class DealershipViewComponent {
	private readonly _carService = inject(CarService);

	readonly dealership = input.required<Dealership>();

	protected readonly cars = computed(() =>
		this._carService
			.cars()
			.filter((car) => car.dealershipId === this.dealership()._id),
	);
}
