import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CarViewComponent } from '../../../features/car/car-view/car-view.component';
import { CarService } from '../../../features/car/car.service';
import { ListingService } from '../../../features/listing/listing.service';

@Component({
	selector: 'app-feed',
	imports: [ButtonModule, CarViewComponent, TranslateDirective],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent {
	private readonly _router = inject(Router);
	private readonly _carService = inject(CarService);
	private readonly _listingService = inject(ListingService);

	readonly favouriteIds = signal<string[]>([]);
	readonly ignoredIds = signal<string[]>([]);
	private readonly _index = signal(0);

	readonly activeListings = computed(() =>
		this._listingService
			.listings()
			.filter((listing) => listing.status === 'active'),
	);

	readonly currentListing = computed(() => {
		const listings = this.activeListings().filter(
			(listing) =>
				!this.favouriteIds().includes(listing._id) &&
				!this.ignoredIds().includes(listing._id),
		);
		return listings[this._index() % Math.max(listings.length, 1)];
	});

	readonly currentCar = computed(() => {
		const listing = this.currentListing();
		return listing ? this._carService.getById(listing.carId)() : undefined;
	});

	favourite(): void {
		const listing = this.currentListing();
		if (listing) this.favouriteIds.update((ids) => [...ids, listing._id]);
	}

	ignore(): void {
		const listing = this.currentListing();
		if (listing) this.ignoredIds.update((ids) => [...ids, listing._id]);
	}

	openListing(): void {
		const listing = this.currentListing();
		if (listing) this._router.navigate(['/listing', listing._id]);
	}
}
