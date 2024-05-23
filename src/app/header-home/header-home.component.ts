import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header-home',
  standalone: true,
  imports: [],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderHomeComponent {

}
