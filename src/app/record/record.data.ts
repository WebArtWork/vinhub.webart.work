import recordData from '../../data/record/record.json';
import { CarRecord, RecordType } from './record.interface';

type RawRecord = Partial<CarRecord>;

const rawRecords = recordData as RawRecord[];

export const records: CarRecord[] = rawRecords.map(_toRecord);

function _toRecord(raw: RawRecord): CarRecord {
	return {
		_id: _stringOrFallback(raw._id),
		carId: _stringOrFallback(raw.carId),
		type: _oneOf<RecordType>(
			raw.type,
			['service', 'repair', 'accident', 'ownership_transfer', 'inspection'],
			'service',
		),
		title: _stringOrFallback(raw.title),
		description: _stringOrFallback(raw.description),
		mileage: _numberOrFallback(raw.mileage),
		date: _stringOrFallback(raw.date),
		cost: typeof raw.cost === 'number' ? raw.cost : undefined,
		currency: raw.cost !== undefined ? _stringOrFallback(raw.currency, 'USD') : undefined,
		verified: raw.verified === true,
		sourceName: _stringOrFallback(raw.sourceName),
	};
}

function _stringOrFallback(value: string | null | undefined, fallback = ''): string {
	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

function _numberOrFallback(value: number | null | undefined, fallback = 0): number {
	return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function _oneOf<T extends string>(value: string | null | undefined, allowed: T[], fallback: T): T {
	return allowed.includes(value as T) ? (value as T) : fallback;
}
