import requestData from '../../data/request/request.json';
import { CarRequest, RequestKind, RequestStatus } from './request.interface';

type RawRequest = Partial<CarRequest>;

const rawRequests = requestData as RawRequest[];

export const requests: CarRequest[] = rawRequests.map(_toRequest);

function _toRequest(raw: RawRequest): CarRequest {
	return {
		_id: _stringOrFallback(raw._id),
		listingId: _stringOrFallback(raw.listingId),
		kind: _oneOf<RequestKind>(raw.kind, ['buy', 'rent', 'test-drive', 'trade-in'], 'buy'),
		status: _oneOf<RequestStatus>(raw.status, ['new', 'contacted', 'closed', 'declined'], 'new'),
		clientName: _stringOrFallback(raw.clientName),
		clientEmail: _stringOrFallback(raw.clientEmail),
		clientPhone: _stringOrFallback(raw.clientPhone),
		message: _stringOrFallback(raw.message),
		createdAt: _stringOrFallback(raw.createdAt),
	};
}

function _stringOrFallback(value: string | null | undefined, fallback = ''): string {
	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

function _oneOf<T extends string>(value: string | null | undefined, allowed: T[], fallback: T): T {
	return allowed.includes(value as T) ? (value as T) : fallback;
}
