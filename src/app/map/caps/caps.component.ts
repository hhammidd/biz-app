import { Component, OnInit } from '@angular/core';
import {IComune} from '../../shared/map/comune';
import {ICap} from '../../shared/map/cap';

const ELEMENT_DATA: ICap[] = [
  {cap_id: 1, cap_name: 'kit kat', cap_code: 'NL'},
  {cap_id: 2, cap_name: 'kit kat', cap_code: 'NL'},
  {cap_id: 3, cap_name: 'kit kat', cap_code: 'NL'},
  {cap_id: 4, cap_name: 'kit kat', cap_code: 'NL'},
];

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
