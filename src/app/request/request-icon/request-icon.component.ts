import { Component, computed, input } from '@angular/core';
import { CarRequest } from '../request.interface';

const KIND_ICON: Record<string, string> = {
	buy: 'pi-shopping-cart',
	rent: 'pi-calendar',
	'test-drive': 'pi-directions',
	'trade-in': 'pi-sync',
};

@Component({
	selector: 'app-request-icon',
	templateUrl: './request-icon.component.html',
	styleUrl: './request-icon.component.scss',
})
export class RequestIconComponent {
	readonly request = input.required<CarRequest>();

	protected readonly icon = computed(
		() => KIND_ICON[this.request().kind] ?? 'pi-envelope',
	);
}
