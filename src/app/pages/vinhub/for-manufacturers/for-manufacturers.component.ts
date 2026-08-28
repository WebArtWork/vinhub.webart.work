import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-manufacturers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-manufacturers.component.html',
	styleUrl: './for-manufacturers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForManufacturersPageComponent {
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: 'What does a manufacturer profile show?',
			answer:
				'Your brand, model catalog, and every car listed on VIN Hub that carries your name — all verified against a digital passport.',
		},
		{
			question: 'Do dealerships need to be onboarded separately?',
			answer:
				'Each dealership manages its own profile and inventory; your manufacturer profile links to all of them automatically.',
		},
		{
			question: 'Is there a cost to join as a manufacturer?',
			answer: 'Getting listed is free — reach out and we will set up your profile and model catalog.',
		},
	];
}
