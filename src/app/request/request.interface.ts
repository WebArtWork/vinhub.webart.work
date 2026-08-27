export type RequestKind = 'buy' | 'rent' | 'test-drive' | 'trade-in';
export type RequestStatus = 'new' | 'contacted' | 'closed' | 'declined';

export interface CarRequest {
	_id: string;
	listingId: string;
	kind: RequestKind;
	status: RequestStatus;
	clientName: string;
	clientEmail: string;
	clientPhone: string;
	message: string;
	createdAt: string;
}
