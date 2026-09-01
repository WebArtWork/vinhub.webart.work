import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { vinhubSeoImage } from './vinhub.seo';

/** Public discovery — reachable without signing in. */
export const vinhubRoutes: Routes = [
	{
		path: 'for-users',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'For Buyers',
				description:
					'Buy, sell, and rent cars on VIN Hub with a verified digital passport.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./for-users/for-users.component').then(
				(m) => m.ForUsersPageComponent,
			),
	},
	{
		path: 'for-salespeople',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'For Salespeople',
				description:
					'Grow your sales with a public VIN Hub salesperson profile.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./for-salespeople/for-salespeople.component').then(
				(m) => m.ForSalespeoplePageComponent,
			),
	},
	{
		path: 'for-manufacturers',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'For Manufacturers',
				description:
					'Put your model catalog in front of verified VIN Hub buyers.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./for-manufacturers/for-manufacturers.component').then(
				(m) => m.ForManufacturersPageComponent,
			),
	},
	{
		path: 'for-dealerships',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'For Dealerships',
				description:
					'Grow your dealership with a verified VIN Hub profile.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./for-dealerships/for-dealerships.component').then(
				(m) => m.ForDealershipsPageComponent,
			),
	},
	{
		path: 'for-service-centers',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'For Service Centers',
				description:
					'Provide diagnostics, repairs, and inspections, and add verified records to the digital passport.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./for-service-centers/for-service-centers.component').then(
				(m) => m.ForServiceCentersPageComponent,
			),
	},
	{
		path: 'feed',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Feed',
				description: 'Swipe through active Vinhub listings.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./feed/feed.component').then((m) => m.FeedPageComponent),
	},
	{
		path: 'explore',
		pathMatch: 'full',
		redirectTo: '',
	},
	{
		path: 'map',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Map',
				description: 'Find Vinhub partner dealerships near you.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./map/map.component').then((m) => m.MapPageComponent),
	},
	{
		path: 'car/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Car',
				description: 'Car details, digital passport, and listings.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./car/car.component').then((m) => m.CarPageComponent),
	},
	{
		path: 'listing/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Listing',
				description: 'Listing details and contact options.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./listing/listing.component').then(
				(m) => m.ListingPageComponent,
			),
	},
	{
		path: 'records/:carId',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Digital passport',
				description:
					"A car's full service, repair, and ownership history.",
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./records/records.component').then(
				(m) => m.RecordsPageComponent,
			),
	},
	{
		path: 'manufacturer/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Manufacturer',
				description: 'Manufacturer profile and available cars.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./manufacturer/manufacturer.component').then(
				(m) => m.ManufacturerPageComponent,
			),
	},
	{
		path: 'dealership/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Dealership',
				description: 'Dealership profile, sales team, and inventory.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./dealership/dealership.component').then(
				(m) => m.DealershipPageComponent,
			),
	},
	{
		path: 'salesperson/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Salesperson',
				description: 'Salesperson profile and reviews.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./salesperson/salesperson.component').then(
				(m) => m.SalespersonPageComponent,
			),
	},
	{
		path: 'client/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Client',
				description: 'Public Vinhub client profile.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./client/client.component').then(
				(m) => m.ClientPageComponent,
			),
	},
];

/** Requires sign-in — previews entity forms, not part of public discovery. */
export const vinhubEditorRoutes: Routes = [
	{
		path: 'editor',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Editor',
				description: 'Preview Vinhub entity forms.',
				image: vinhubSeoImage,
				index: false,
			},
		},
		loadComponent: () =>
			import('./editor/editor.component').then(
				(m) => m.EditorPageComponent,
			),
	},
];
