import dealershipData from '../../data/dealership/dealership.json';
import { Dealership } from './dealership.interface';

type RawDealership = Partial<Dealership>;

const rawDealerships = dealershipData as RawDealership[];

export const dealerships: Dealership[] = rawDealerships.map(_toDealership);

function _toDealership(raw: RawDealership): Dealership {
	return {
		_id: _stringOrFallback(raw._id),
		name: _stringOrFallback(raw.name),
		address: _stringOrFallback(raw.address),
		city: _stringOrFallback(raw.city),
		state: _stringOrFallback(raw.state),
		phone: _stringOrFallback(raw.phone),
		email: _stringOrFallback(raw.email),
		logo: _stringOrFallback(raw.logo),
		lat: _numberOrFallback(raw.lat),
		lng: _numberOrFallback(raw.lng),
		rating: _numberOrFallback(raw.rating),
	};
}

function _stringOrFallback(value: string | null | undefined, fallback = ''): string {
	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

function _numberOrFallback(value: number | null | undefined, fallback = 0): number {
	return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}
