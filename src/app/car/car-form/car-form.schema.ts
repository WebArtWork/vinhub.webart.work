import { required, schema } from '@angular/forms/signals';
import { CarFormModel } from './car-form.interface';

export const carFormSchema = schema<CarFormModel>((path) => {
	required(path.make);
	required(path.model);
	required(path.year);
	required(path.vin);
	required(path.price);
});
