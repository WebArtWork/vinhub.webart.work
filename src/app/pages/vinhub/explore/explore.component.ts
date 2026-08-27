import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { ListingShortComponent } from '../../../listing/listing-short/listing-short.component';
import { ListingService } from '../../../listing/listing.service';
import { CarService } from '../../../car/car.service';

@Component({
	selector: 'app-explore',
	imports: [
		FormsModule,
		InputTextModule,
		SelectModule,
		ListingShortComponent,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExplorePageComponent {
	private readonly _listingService = inject(ListingService);
	private readonly _carService = inject(CarService);

	readonly query = signal('');
	readonly kind = signal<string | null>(null);
	readonly kinds = ['sale', 'rental'];

	readonly results = computed(() => {
		const query = this.query().trim().toLowerCase();
		const kind = this.kind();
		const cars = this._carService.cars();

		return this._listingService.listings().filter((listing) => {
			if (kind && listing.kind !== kind) return false;

			if (!query) return true;

			const car = cars.find((c) => c._id === listing.carId);
			const haystack =
				`${listing.title} ${car?.make ?? ''} ${car?.model ?? ''}`.toLowerCase();
			return haystack.includes(query);
		});
	});
}
