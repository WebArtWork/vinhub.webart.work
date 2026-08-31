export type ListingKind = 'sale' | 'rental';
export type ListingStatus =
	| 'active'
	| 'pending'
	| 'sold'
	| 'rented'
	| 'expired';
export type ListingRentalPeriod = 'day' | 'week' | 'month';

export interface Listing {
	_id: string;
	carId: string;
	kind: ListingKind;
	status: ListingStatus;
	price: number;
	currency: string;
	rentalPeriod?: ListingRentalPeriod;
	title: string;
	description: string;
	postedAt: string;
	dealershipId: string;
	salespersonId: string;
	views: number;
}
