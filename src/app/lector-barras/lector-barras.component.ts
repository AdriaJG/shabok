import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-lector-barras',
  templateUrl: './lector-barras.component.html',
  styleUrls: ['./lector-barras.component.css']
})
export class LectorBarrasComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result: { codeResult: { code: any; }; }) {
    this.barcodeValue = result.codeResult.code;
    alert("https://openlibrary.org/isbn/"+this.barcodeValue);
  }

  onStarted(started: any) {
    console.log(started);
  }
}
