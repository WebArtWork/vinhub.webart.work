import { required, schema } from '@angular/forms/signals';
import { CarRequest } from '../request.interface';

export const requestFormSchema = schema<CarRequest>((path) => {
	required(path.listingId);
	required(path.clientName);
	required(path.clientEmail);
});
