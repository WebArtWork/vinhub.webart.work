import { required, schema } from '@angular/forms/signals';
import { RecordFormModel } from './record-form.interface';

export const recordFormSchema = schema<RecordFormModel>((path) => {
	required(path.carId);
	required(path.title);
	required(path.date);
});
