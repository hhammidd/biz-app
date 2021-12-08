import { Component, OnInit } from '@angular/core';
import {SpmainService} from './shared/spmain.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {RegionsDto} from './RegionsDto';
import {ProvinceDto} from './ProvinceDto';
import {ComuneDto} from './ComuneDto';

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

  comuneDropdownList: ComuneDto[] = [];
  comuneSelectedItems = [];
  comuneDropdownSettings: IDropdownSettings;

  public formGroup: FormGroup;
  public loadContent: boolean = false;

  ngOnInit() {
    this.service.getRegions().subscribe(res => this.regionDropdownList = res );
    this.service.getProvinces().subscribe(res => this.provinceDropdownList = res );
    this.service.getComunes().subscribe(res => this.comuneDropdownList = res );
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

    this.provinceDropdownSettings =  {
      singleSelection: false,
      idField: 'provinceId',
      textField: 'provinceName',
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

    this.comuneDropdownSettings =  {
      singleSelection: false,
      idField: 'comuneId',
      textField: 'comuneName',
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
    this.setForm();
    this.service.salePointsOnGeo(this.formGroup.value);
  }

  public setForm() {
    this.formGroup = new FormGroup({
      id: new FormControl(1),
      regions: new FormControl(this.regionDropdownList),
      provinces: new FormControl(this.provinceDropdownList),
      comunes: new FormControl(this.comuneDropdownList),
      market: new FormControl('ITALY'), // Todo fill later
      field: new FormControl('EV'), // Todo fill later
    });
    this.loadContent = true;
  }

  // private salePointsOnGeo(formGroup: FormGroup) {
  //   this.service.salePointsOnGeo(this.formGroup.value);
  // }

  get f() {
    return this.formGroup.controls;
  }

  public save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    console.log(this.formGroup.value);
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onRegionSelect(regionj: any) {
    console.log(regionj);
  }

  public onProvinceSelect(provincej: any) {
    console.log(provincej);
  }

  public onComuneSelect(comunej: any) {
    console.log(comunej);
  }

  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAllRegion(regions: any) {
    console.log(regions);
  }

  public onSelectAllProvines(provinecs: any) {
    console.log(provinecs);
  }

  public onSelectAllComunes(comunes: any) {
    console.log(comunes);
  }

  public onDeSelectAll(items: any) {
    console.log(items);
  }


}
