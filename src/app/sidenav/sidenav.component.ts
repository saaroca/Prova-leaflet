import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

/** @title Sidenav open & close behavior */
@Component({
  selector: 'sidenav-app',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}