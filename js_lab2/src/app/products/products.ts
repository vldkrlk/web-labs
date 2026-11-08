import { Component } from '@angular/core';
import { Product } from '../../classes/Product';
import { FormsModule } from '@angular/forms';
import { Marker } from '../../classes/Marker';

@Component({
  imports: [FormsModule],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  quantityField: number = 0;
  priceField: number = 0;
  markerNameField: string = "";
  sortField: number = 1;
  productPrice: number | null = null;
  markerPrice: number | null = null;
  validationMessage: string = "";

  calculatePrices(event: MouseEvent): void {
    event.preventDefault();
    this.validationMessage = "";
    this.productPrice = null;
    this.markerPrice = null;

    if (!Number.isInteger(this.quantityField) || this.quantityField <= 0) {
      this.validationMessage = "Кількість має бути цілим числом більше нуля.";
      return;
    }

    if (!Number.isFinite(this.priceField) || this.priceField < 0) {
      this.validationMessage = "Ціна не може бути від’ємною.";
      return;
    }

    if (!this.markerNameField.trim()) {
      this.validationMessage = "Введіть назву фломастера.";
      return;
    }

    if (!Number.isInteger(this.sortField) || this.sortField < 1 || this.sortField > 3) {
      this.validationMessage = "Сорт має бути цілим числом від 1 до 3.";
      return;
    }

    const product = new Product(this.quantityField, this.priceField);
    const marker = new Marker(this.quantityField, this.priceField, this.markerNameField, this.sortField);
    this.productPrice = product.getPrice();
    this.markerPrice = marker.getPrice();
  }
}
