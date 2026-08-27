import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { vinhubSeoImage } from './vinhub.seo';

export const vinhubRoutes: Routes = [
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
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Explore',
				description: 'Search and filter Vinhub listings.',
				image: vinhubSeoImage,
			},
		},
		loadComponent: () =>
			import('./explore/explore.component').then(
				(m) => m.ExplorePageComponent,
			),
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
