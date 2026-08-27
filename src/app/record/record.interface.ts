export type RecordType =
	| 'service'
	| 'repair'
	| 'accident'
	| 'ownership_transfer'
	| 'inspection';

export interface CarRecord {
	_id: string;
	carId: string;
	type: RecordType;
	title: string;
	description: string;
	mileage: number;
	date: string;
	cost?: number;
	currency?: string;
	verified: boolean;
	sourceName: string;
}
