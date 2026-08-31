export type CarType = 'sedan' | 'suv' | 'hatchback' | 'coupe' | 'truck' | 'van';
export type CarTransmission = 'automatic' | 'manual';
export type CarFuelType = 'petrol' | 'diesel' | 'electric' | 'hybrid';
export type CarCondition = 'new' | 'used';

export interface Car {
	_id: string;
	make: string;
	model: string;
	year: number;
	vin: string;
	type: CarType;
	price: number;
	currency: string;
	mileage: number;
	color: string;
	transmission: CarTransmission;
	fuelType: CarFuelType;
	condition: CarCondition;
	images: string[];
	description: string;
	manufacturerId: string;
	dealershipId: string;
}
