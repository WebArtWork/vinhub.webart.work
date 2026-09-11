import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Static placeholder directory page — dealership browsing isn't backed by
 * real data yet, so this just holds the `/dealerships` route with an
 * on-brand empty state until the feature ships.
 */
@Component({
	selector: 'app-dealerships',
	imports: [],
	templateUrl: './dealerships.component.html',
	styleUrl: './dealerships.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealershipsPageComponent {}
