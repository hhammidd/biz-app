import { Component, OnInit } from '@angular/core';
import {SpmainService} from './shared/spmain.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {RegionsDto} from "./RegionsDto";
import {ProvinceDto} from "./ProvinceDto";

@Component({
  selector: 'app-spmains',
  templateUrl: './spmains.component.html',
  styleUrls: ['./spmains.component.css']
})
export class SpmainsComponent implements OnInit {


  constructor(private service: SpmainService, private fb: FormBuilder) { }

  regionDropdownList: RegionsDto[] = [];
  regionSelectedItems = [];
  regionDropdownSettings: IDropdownSettings;

  provinceDropdownList: ProvinceDto[] = [];
  provinceSelectedItems = [];
  provinceDropdownSettings: IDropdownSettings;

  public formGroup: FormGroup;
  public loadContent: boolean = false;

  ngOnInit() {
    this.service.getRegions().subscribe(res => this.regionDropdownList = res );
    this.regionSelectedItems = [
    ];
    this.regionDropdownSettings =  {
      singleSelection: false,
      idField: 'regionId',
      textField: 'regionName',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection: -1,
      clearSearchFilter: true,
      searchPlaceholderText: 'search cities',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
  }

  public setForm() {
    this.formGroup = new FormGroup({
      name: new FormControl(this.regionDropdownList, Validators.required),
    });
    this.loadContent = true;
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
}
