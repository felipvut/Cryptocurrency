import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHomeComponent } from '../header-home/header-home.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    HeaderHomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
