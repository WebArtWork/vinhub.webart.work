import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-salespeople',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-salespeople.component.html',
	styleUrl: './for-salespeople.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSalespeoplePageComponent {
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: 'How much does a salesperson profile cost?',
			answer:
				"It's free to start — sign up and we'll walk you through connecting your listings and, if applicable, your dealership.",
		},
		{
			question: 'Can I list cars independently, outside a dealership?',
			answer:
				'Yes, independent salespeople get their own public profile and can publish listings on their own.',
		},
		{
			question: 'What do buyers see on my profile?',
			answer:
				"Your name, reviews, and every active listing you've published, all in one verified place.",
		},
	];
}
