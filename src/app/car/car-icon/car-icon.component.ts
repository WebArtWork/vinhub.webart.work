import { Component, computed, input } from '@angular/core';
import { Car } from '../car.interface';

@Component({
	selector: 'app-car-icon',
	templateUrl: './car-icon.component.html',
	styleUrl: './car-icon.component.scss',
})
export class CarIconComponent {
	readonly car = input.required<Car>();

	protected readonly image = computed(() => this.car().images[0] ?? '');
	protected readonly alt = computed(
		() => `${this.car().year} ${this.car().make} ${this.car().model}`,
	);
}
