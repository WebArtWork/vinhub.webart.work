import { Component, computed, inject, input } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { CarShortComponent } from '../../car/car-short/car-short.component';
import { CarService } from '../../car/car.service';
import { ManufacturerIconComponent } from '../manufacturer-icon/manufacturer-icon.component';
import { Manufacturer } from '../manufacturer.interface';

@Component({
	selector: 'app-manufacturer-view',
	imports: [CardModule, ManufacturerIconComponent, CarShortComponent],
	templateUrl: './manufacturer-view.component.html',
	styleUrl: './manufacturer-view.component.scss',
})
export class ManufacturerViewComponent {
	private readonly _carService = inject(CarService);

	readonly manufacturer = input.required<Manufacturer>();

	protected readonly cars = computed(() =>
		this._carService
			.cars()
			.filter((car) => car.manufacturerId === this.manufacturer()._id),
	);
}
