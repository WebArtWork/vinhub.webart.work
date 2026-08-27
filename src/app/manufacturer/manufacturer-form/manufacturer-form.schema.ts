import { required, schema } from '@angular/forms/signals';
import { Manufacturer } from '../manufacturer.interface';

export const manufacturerFormSchema = schema<Manufacturer>((path) => {
	required(path.name);
	required(path.country);
});
