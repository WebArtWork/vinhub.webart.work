import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-service-centers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent, TranslateDirective],
	templateUrl: './for-service-centers.component.html',
	styleUrl: './for-service-centers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForServiceCentersPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: this.translateService.translate('Who can register as a service center?')(),
			answer: this.translateService.translate(
				"Any licensed vehicle maintenance, repair, or inspection business — reach out and we'll verify your details and set up your profile.",
			)(),
		},
		{
			question: this.translateService.translate("Do our service records go straight into the car's digital passport?")(),
			answer: this.translateService.translate(
				"Yes, every job you submit — diagnostics, repairs, inspections — is added directly to the car's digital passport as a verified record.",
			)(),
		},
		{
			question: this.translateService.translate('Does the car owner see the record right away?')(),
			answer: this.translateService.translate(
				"Yes, the owner sees the new record in their car's digital passport as soon as you submit it.",
			)(),
		},
	];
}
