import carData from '../../data/car/car.json';
import {
	Car,
	CarCondition,
	CarFuelType,
	CarTransmission,
	CarType,
} from './car.interface';

type RawCar = Partial<Car>;

const rawCars = carData as RawCar[];

export const cars: Car[] = rawCars.map(_toCar);

function _toCar(raw: RawCar): Car {
	return {
		_id: _stringOrFallback(raw._id),
		make: _stringOrFallback(raw.make),
		model: _stringOrFallback(raw.model),
		year: _numberOrFallback(raw.year),
		vin: _stringOrFallback(raw.vin),
		type: _oneOf<CarType>(
			raw.type,
			['sedan', 'suv', 'hatchback', 'coupe', 'truck', 'van'],
			'sedan',
		),
		price: _numberOrFallback(raw.price),
		currency: _stringOrFallback(raw.currency, 'USD'),
		mileage: _numberOrFallback(raw.mileage),
		color: _stringOrFallback(raw.color),
		transmission: _oneOf<CarTransmission>(
			raw.transmission,
			['automatic', 'manual'],
			'automatic',
		),
		fuelType: _oneOf<CarFuelType>(
			raw.fuelType,
			['petrol', 'diesel', 'electric', 'hybrid'],
			'petrol',
		),
		condition: _oneOf<CarCondition>(raw.condition, ['new', 'used'], 'used'),
		images: Array.isArray(raw.images)
			? raw.images.filter((i) => typeof i === 'string')
			: [],
		description: _stringOrFallback(raw.description),
		manufacturerId: _stringOrFallback(raw.manufacturerId),
		dealershipId: _stringOrFallback(raw.dealershipId),
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
