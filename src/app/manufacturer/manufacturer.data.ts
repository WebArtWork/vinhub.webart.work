import manufacturerData from '../../data/manufacturer/manufacturer.json';
import { Manufacturer } from './manufacturer.interface';

type RawManufacturer = Partial<Manufacturer>;

const rawManufacturers = manufacturerData as RawManufacturer[];

export const manufacturers: Manufacturer[] = rawManufacturers.map(_toManufacturer);

function _toManufacturer(raw: RawManufacturer): Manufacturer {
	return {
		_id: _stringOrFallback(raw._id),
		name: _stringOrFallback(raw.name),
		country: _stringOrFallback(raw.country),
		founded: _numberOrFallback(raw.founded),
		logo: _stringOrFallback(raw.logo),
		description: _stringOrFallback(raw.description),
		website: _stringOrFallback(raw.website),
	};
}

function _stringOrFallback(value: string | null | undefined, fallback = ''): string {
	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

function _numberOrFallback(value: number | null | undefined, fallback = 0): number {
	return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}
