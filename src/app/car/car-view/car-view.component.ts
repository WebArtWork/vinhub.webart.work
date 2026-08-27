import { CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { Car } from '../car.interface';

@Component({
	selector: 'app-car-view',
	imports: [CurrencyPipe, DecimalPipe, TitleCasePipe, CardModule, TagModule],
	templateUrl: './car-view.component.html',
	styleUrl: './car-view.component.scss',
})
export class CarViewComponent {
	readonly car = input.required<Car>();

	protected readonly title = computed(
		() => `${this.car().year} ${this.car().make} ${this.car().model}`,
	);
	protected readonly image = computed(() => this.car().images[0] ?? '');
}
