import { Component, computed, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { RatingModule } from '@wawjs/ngx-prime/rating';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CommentFormModel } from './comment-form.interface';

@Component({
	selector: 'app-comment-form',
	imports: [
		FormsModule,
		ButtonModule,
		RatingModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './comment-form.component.html',
	styleUrl: './comment-form.component.scss',
})
export class CommentFormComponent {
	readonly saved = output<CommentFormModel>();

	readonly model = signal<CommentFormModel>({ rating: null, text: '' });

	readonly isSaveDisabled = computed(() => !this.model().text.trim());

	updateModel<K extends keyof CommentFormModel>(
		key: K,
		value: CommentFormModel[K],
	): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		if (this.isSaveDisabled()) return;
		this.saved.emit(this.model());
		this.model.set({ rating: null, text: '' });
	}
}
