import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { ListingIconComponent } from '../listing-icon/listing-icon.component';
import { Listing } from '../listing.interface';

@Component({
	selector: 'app-listing-short',
	imports: [
		RouterLink,
		CurrencyPipe,
		TitleCasePipe,
		TagModule,
		ListingIconComponent,
	],
	templateUrl: './listing-short.component.html',
	styleUrl: './listing-short.component.scss',
})
export class ListingShortComponent {
	readonly listing = input.required<Listing>();
}
