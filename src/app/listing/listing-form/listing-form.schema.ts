import { required, schema } from '@angular/forms/signals';
import { ListingFormModel } from './listing-form.interface';

export const listingFormSchema = schema<ListingFormModel>((path) => {
	required(path.carId);
	required(path.title);
	required(path.price);
});
