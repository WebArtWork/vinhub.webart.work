import { CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarIconComponent } from '../car-icon/car-icon.component';
import { Car } from '../car.interface';

@Component({
	selector: 'app-car-short',
	imports: [
		RouterLink,
		CurrencyPipe,
		DecimalPipe,
		TitleCasePipe,
		CarIconComponent,
	],
	templateUrl: './car-short.component.html',
	styleUrl: './car-short.component.scss',
})
export class CarShortComponent {
	readonly car = input.required<Car>();

	protected readonly title = computed(
		() => `${this.car().year} ${this.car().make} ${this.car().model}`,
	);
}
