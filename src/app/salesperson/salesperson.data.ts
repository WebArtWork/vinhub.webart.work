import salespersonData from '../../data/salesperson/salesperson.json';
import { Salesperson } from './salesperson.interface';

type RawSalesperson = Partial<Salesperson>;

const rawSalespeople = salespersonData as RawSalesperson[];

export const salespeople: Salesperson[] = rawSalespeople.map(_toSalesperson);

function _toSalesperson(raw: RawSalesperson): Salesperson {
	return {
		_id: _stringOrFallback(raw._id),
		name: _stringOrFallback(raw.name),
		dealershipId: _stringOrFallback(raw.dealershipId),
		title: _stringOrFallback(raw.title),
		phone: _stringOrFallback(raw.phone),
		email: _stringOrFallback(raw.email),
		avatar: _stringOrFallback(raw.avatar),
		rating: _numberOrFallback(raw.rating),
		dealsClosed: _numberOrFallback(raw.dealsClosed),
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
