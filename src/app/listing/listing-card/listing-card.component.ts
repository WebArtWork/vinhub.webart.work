import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	input,
	output,
} from '@angular/core';
import { CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { CarService } from '../../car/car.service';
import { Listing } from '../listing.interface';

@Component({
	selector: 'app-listing-card',
	imports: [CardModule, TagModule, CurrencyPipe, DecimalPipe, TitleCasePipe],
	templateUrl: './listing-card.component.html',
	styleUrl: './listing-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingCardComponent {
	private readonly _carService = inject(CarService);

	readonly listing = input.required<Listing>();
	readonly open = output<void>();

	protected readonly car = computed(() =>
		this._carService.getById(this.listing().carId)(),
	);

	protected readonly image = computed(() => this.car()?.images[0] ?? '');

	protected readonly subtitle = computed(() => {
		const car = this.car();
		return car ? `${car.year} ${car.make} ${car.model}` : '';
	});

	onCardClick(): void {
		this.open.emit();
	}
}
