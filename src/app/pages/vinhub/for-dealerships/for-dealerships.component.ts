import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-dealerships',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-dealerships.component.html',
	styleUrl: './for-dealerships.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForDealershipsPageComponent {
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: 'How much does a dealership partnership cost?',
			answer: 'It is free to start — reach out and we will walk you through the details.',
		},
		{
			question: 'Can our salespeople have their own profiles?',
			answer:
				'Yes, each salesperson at your dealership gets their own public profile linked to your dealership profile.',
		},
		{
			question: 'What do buyers see on our dealership profile?',
			answer: 'Your description, rating, salespeople, and every active listing in your inventory.',
		},
	];
}
