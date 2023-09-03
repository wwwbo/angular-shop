import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Observable, Subject } from 'rxjs';
import { Products } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  // dataProduct: any[] = [];
  dataProduct!: Products;
  onDestroy$ = new Subject<void>();

  constructor(
    private dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public openProductDetail: Products
  ) { }

  ngOnInit(): void {
    if (this.openProductDetail) {
      this.dataProduct = this.openProductDetail;
    }
  }

  closeDialog() {
    this.dialogRef.close('close');
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
