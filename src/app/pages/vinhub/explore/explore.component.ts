import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { CarService } from '../../../car/car.service';
import { ListingCardComponent } from '../../../listing/listing-card/listing-card.component';
import { ListingService } from '../../../listing/listing.service';

@Component({
	selector: 'app-explore',
	imports: [
		FormsModule,
		RouterLink,
		ButtonModule,
		InputTextModule,
		SelectModule,
		ListingCardComponent,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExplorePageComponent {
	private readonly _router = inject(Router);
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

	openListing(id: string): void {
		this._router.navigate(['/listing', id]);
	}
}
