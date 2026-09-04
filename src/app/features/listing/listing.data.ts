import listingData from '../../../data/listing/listing.json';
import {
	Listing,
	ListingKind,
	ListingRentalPeriod,
	ListingStatus,
} from './listing.interface';

type RawListing = Partial<Listing>;

const rawListings = listingData as RawListing[];

export const listings: Listing[] = rawListings.map(_toListing);

function _toListing(raw: RawListing): Listing {
	return {
		_id: _stringOrFallback(raw._id),
		carId: _stringOrFallback(raw.carId),
		kind: _oneOf<ListingKind>(raw.kind, ['sale', 'rental'], 'sale'),
		status: _oneOf<ListingStatus>(
			raw.status,
			['active', 'pending', 'sold', 'rented', 'expired'],
			'active',
		),
		price: _numberOrFallback(raw.price),
		currency: _stringOrFallback(raw.currency, 'USD'),
		rentalPeriod: raw.rentalPeriod
			? _oneOf<ListingRentalPeriod>(
					raw.rentalPeriod,
					['day', 'week', 'month'],
					'day',
				)
			: undefined,
		title: _stringOrFallback(raw.title),
		description: _stringOrFallback(raw.description),
		postedAt: _stringOrFallback(raw.postedAt),
		dealershipId: _stringOrFallback(raw.dealershipId),
		salespersonId: _stringOrFallback(raw.salespersonId),
		views: _numberOrFallback(raw.views),
	};
}

function _stringOrFallback(
	value: string | null | undefined,
	fallback = '',
): string {
	return typeof value === 'string' && value.trim().length > 0
		? value.trim()
		: fallback;
}

function _numberOrFallback(
	value: number | null | undefined,
	fallback = 0,
): number {
	return typeof value === 'number' && Number.isFinite(value)
		? value
		: fallback;
}

function _oneOf<T extends string>(
	value: string | null | undefined,
	allowed: T[],
	fallback: T,
): T {
	return allowed.includes(value as T) ? (value as T) : fallback;
}
