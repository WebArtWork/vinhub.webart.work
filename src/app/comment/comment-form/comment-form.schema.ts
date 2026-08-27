import { required, schema } from '@angular/forms/signals';
import { CommentFormModel } from './comment-form.interface';

export const commentFormSchema = schema<CommentFormModel>((path) => {
	required(path.text);
});
