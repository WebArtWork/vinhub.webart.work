import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { ContactService } from '../../contact.service';

export type LeadFormKind = 'user' | 'salesperson' | 'manufacturer' | 'dealership';

const KIND_LABELS: Record<LeadFormKind, string> = {
	user: 'Buyer inquiry',
	salesperson: 'Salesperson application',
	manufacturer: 'Manufacturer application',
	dealership: 'Dealership application',
};

/** Inline lead-capture form used on the /for-* landing pages. Sends to the VIN Hub Telegram contact channel. */
@Component({
	selector: 'app-lead-form',
	imports: [FormsModule, InputTextModule, TextareaModule, ButtonModule],
	templateUrl: './lead-form.component.html',
	styleUrl: './lead-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadFormComponent {
	private readonly _contactService = inject(ContactService);

	readonly kind = input.required<LeadFormKind>();
	readonly submitLabel = input('');

	private readonly _nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

	protected readonly name = signal('');
	protected readonly contact = signal('');
	protected readonly message = signal('');
	protected readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

	constructor() {
		afterNextRender(() => this._nameInput()?.nativeElement.focus());
	}

	protected async submit(form: NgForm): Promise<void> {
		if (form.invalid || this.status() === 'sending') return;

		this.status.set('sending');

		const lines = [
			`VIN Hub lead: ${KIND_LABELS[this.kind()]}`,
			`Name: ${this.name()}`,
			`Contact: ${this.contact()}`,
		];
		if (this.message().trim()) lines.push('', this.message().trim());

		const success = await this._contactService.send(lines.join('\n'));

		if (!success) {
			this.status.set('error');
			return;
		}

		this.status.set('success');
		form.resetForm();
	}

	protected retry(): void {
		this.status.set('idle');
	}
}
