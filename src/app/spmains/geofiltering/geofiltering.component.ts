import { Component, OnInit } from '@angular/core';
import {SpmainService} from '../shared/spmain.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {RegionsDto} from '../RegionsDto';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {ProvinceDto} from '../ProvinceDto';
import {ComuneDto} from '../ComuneDto';
import {FormControl, FormGroup} from '@angular/forms';
import {SalePointsInfoTo} from '../SalePointsInfoTo';

@Component({
  selector: 'app-geofiltering',
  templateUrl: './geofiltering.component.html',
  styleUrls: ['./geofiltering.component.css']
})
export class GeofilteringComponent implements OnInit {

  constructor(private service: SpmainService, private dialog: MatDialog) {
  }

  fields = [
    { id: 1, value: 'Automation'},
    { id: 2, value: 'Electrical vehicles'},
    { id: 3, value: 'Farmacy'}];

  regionDropdownList: RegionsDto[] = [];
  regionSelectedItems = [];
  regionDropdownSettings: IDropdownSettings;

  provinceDropdownList: ProvinceDto[] = [];
  provinceSelectedItems = [];
  provinceDropdownSettings: IDropdownSettings;

  comuneDropdownList: ComuneDto[] = [];
  comuneSelectedItems = [];
  comuneDropdownSettings: IDropdownSettings;

  field: string;
  market: string;

  public formGroup: FormGroup;
  public loadContent = false;

  salePointsInfoTo: SalePointsInfoTo;

  ngOnInit() {
    this.service.getRegions().subscribe(res => this.regionDropdownList = res);
    this.service.getProvinces().subscribe(res => this.provinceDropdownList = res);
    this.service.getComunes().subscribe(res => this.comuneDropdownList = res);
    this.regionSelectedItems = [];
    this.regionDropdownSettings = {
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

    this.provinceDropdownSettings = {
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

    this.comuneDropdownSettings = {
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


  get f() {
    return this.formGroup.controls;
  }


  public save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    console.log(this.formGroup.value);
    this.service.salePointsOnGeo(this.formGroup.value);

  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(GeofilteringComponent, dialogConfig);
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
