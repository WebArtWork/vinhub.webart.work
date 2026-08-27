import { required, schema } from '@angular/forms/signals';
import { Dealership } from '../dealership.interface';

export const dealershipFormSchema = schema<Dealership>((path) => {
	required(path.name);
	required(path.address);
	required(path.city);
});
