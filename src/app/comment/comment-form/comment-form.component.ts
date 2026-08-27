import { Component, computed, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { RatingModule } from '@wawjs/ngx-prime/rating';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CommentFormModel } from './comment-form.interface';
import { commentFormSchema } from './comment-form.schema';

@Component({
	selector: 'app-comment-form',
	imports: [FormField, FormsModule, ButtonModule, RatingModule, TextareaModule, TranslateDirective],
	templateUrl: './comment-form.component.html',
	styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent {
	readonly saved = output<CommentFormModel>();

	readonly rating = signal<number | null>(null);
	readonly commentModel = signal<CommentFormModel>({ rating: null, text: '' });
	readonly commentForm = form(this.commentModel, commentFormSchema);
	readonly isSubmitDisabled = computed(() => this.commentForm().invalid());

	wFormSubmit(): void {
		submit(this.commentForm, (formTree) => {
			this.saved.emit({ ...(formTree().value() as CommentFormModel), rating: this.rating() });
			this.commentModel.set({ rating: null, text: '' });
			this.commentForm().reset();
			this.rating.set(null);
			return Promise.resolve();
		});
	}
}
