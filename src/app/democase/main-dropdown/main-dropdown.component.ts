import {Component, OnInit, HostBinding} from '@angular/core';
import { fadeInUp } from '../common/animations';

@Component({
  selector: 'free-main-dropdown',
  templateUrl: './main-dropdown.component.html',
  styleUrls: ['./main-dropdown.component.css'],
  animations: [fadeInUp]
})
export class MainDropdownComponent implements OnInit {

  @HostBinding('@fadeInUpState') fadeInUpState;
  @HostBinding('style.display') display = 'block';
  pageTitle = 'Components-Dropdown';
  menus = [];

  constructor() { }

  ngOnInit() {
    this.menus = [{
      'name': 'TGCode',
      'icon': 'user'
    }, {
      'name': '邮件',
      'icon': 'envelope'
    }, {
      'name': '帮助',
      'icon': 'question-circle'
    }, {
      'name': '设置',
      'icon': 'cog'
    }, {
      'name': '登出',
      'icon': 'sign-out'
    }];
  }

}

