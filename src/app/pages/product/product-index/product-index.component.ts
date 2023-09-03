import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataProduct, Products } from '../product.model';
import { ProductService } from '../product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['title', 'brand', 'category', 'price', 'action'];

  onDestroy$ = new Subject<void>();
  dataProduct!: DataProduct;
  dataSource = new MatTableDataSource<Products>();

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.uiService.showLoading();
    this.productService.getProduct().pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      (data: DataProduct) => {
        this.uiService.hideLoading();
        this.dataProduct = data;
        this.dataSource.data = data.products;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  openProductDetail(element: Products) {
    this.dialog.open(ProductDetailComponent, {
      autoFocus: false,
      panelClass: 'my-custom-dialog-class',
      width: '500px',
      data: element
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
