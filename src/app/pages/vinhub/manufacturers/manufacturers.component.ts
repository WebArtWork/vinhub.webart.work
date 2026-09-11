import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Static placeholder directory page — manufacturer browsing isn't backed by
 * real data yet, so this just holds the `/manufacturers` route with an
 * on-brand empty state until the feature ships.
 */
@Component({
	selector: 'app-manufacturers',
	imports: [],
	templateUrl: './manufacturers.component.html',
	styleUrl: './manufacturers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManufacturersPageComponent {}
