import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-salespeople',
	imports: [ButtonModule, AccordionModule, LeadFormComponent, TranslateDirective],
	templateUrl: './for-salespeople.component.html',
	styleUrl: './for-salespeople.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSalespeoplePageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: this.translateService.translate('How much does a salesperson profile cost?')(),
			answer: this.translateService.translate(
				"It's free to start — sign up and we'll walk you through connecting your listings and, if applicable, your dealership.",
			)(),
		},
		{
			question: this.translateService.translate('Can I list cars independently, outside a dealership?')(),
			answer: this.translateService.translate(
				'Yes, independent salespeople get their own public profile and can publish listings on their own.',
			)(),
		},
		{
			question: this.translateService.translate('What do buyers see on my profile?')(),
			answer: this.translateService.translate(
				"Your name, reviews, and every active listing you've published, all in one verified place.",
			)(),
		},
	];
}
