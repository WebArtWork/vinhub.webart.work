import { Component, computed, input, output, signal } from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PublicUser } from '../user.interface';
import { userFormSchema } from './user-form.schema';

@Component({
	selector: 'app-user-form',
	imports: [FormField, ButtonModule, InputTextModule, SelectModule, TextareaModule, TranslateDirective],
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
	readonly user = input<PublicUser>();
	readonly saved = output<PublicUser>();

	protected readonly roles = ['buyer', 'seller', 'dealer'];

	private readonly _initialModel = computed<PublicUser>(() => {
		const u = this.user();
		return {
			_id: u?._id ?? '',
			name: u?.name ?? '',
			role: u?.role ?? 'buyer',
			avatar: u?.avatar ?? '',
			bio: u?.bio ?? '',
			location: u?.location ?? '',
			memberSince: u?.memberSince ?? '',
			listingsCount: u?.listingsCount ?? 0,
			rating: u?.rating ?? 0,
		};
	});

	readonly userModel = signal<PublicUser>(this._initialModel());
	readonly userForm = form(this.userModel, userFormSchema);
	readonly isSubmitDisabled = computed(() => this.userForm().invalid());

	wFormSubmit(): void {
		submit(this.userForm, (formTree) => {
			this.saved.emit(formTree().value() as PublicUser);
			return Promise.resolve();
		});
	}
}
