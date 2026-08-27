import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PublicUserService } from '../../../user/user.service';
import { UserViewComponent } from '../../../user/user-view/user-view.component';

@Component({
	selector: 'app-client-page',
	imports: [UserViewComponent],
	templateUrl: './client.component.html',
	styleUrl: './client.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPageComponent {
	private readonly _userService = inject(PublicUserService);

	private readonly _userId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('id') ?? '')),
		{ initialValue: '' },
	);

	readonly user = computed(() => this._userService.getById(this._userId())());
}
