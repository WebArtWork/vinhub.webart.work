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
import { DealershipService } from '../../../dealership/dealership.service';
import {
	LeafletMapComponent,
	LeafletMapMarker,
} from '../../../shared/vinhub/leaflet-map.component';

const DEFAULT_CENTER = { lat: 37.7793, lng: -122.4193 };

@Component({
	selector: 'app-map',
	imports: [ButtonModule, LeafletMapComponent, TranslateDirective],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapPageComponent {
	private readonly _router = inject(Router);
	private readonly _dealershipService = inject(DealershipService);

	readonly selectedId = signal<string | null>(null);

	readonly center = computed(() => {
		const dealerships = this._dealershipService.dealerships();
		if (!dealerships.length) return DEFAULT_CENTER;

		const lat =
			dealerships.reduce((sum, d) => sum + d.lat, 0) / dealerships.length;
		const lng =
			dealerships.reduce((sum, d) => sum + d.lng, 0) / dealerships.length;
		return { lat, lng };
	});

	readonly markers = computed<LeafletMapMarker[]>(() =>
		this._dealershipService.dealerships().map((dealership) => ({
			id: dealership._id,
			position: { lat: dealership.lat, lng: dealership.lng },
			title: dealership.name,
			label: dealership.name,
		})),
	);

	readonly selectedDealership = computed(() =>
		this._dealershipService
			.dealerships()
			.find((d) => d._id === this.selectedId()),
	);

	onMarkerSelected(marker: LeafletMapMarker): void {
		this.selectedId.set(marker.id);
	}

	openDealership(id: string): void {
		this._router.navigate(['/dealership', id]);
	}
}
