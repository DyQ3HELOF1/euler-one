import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  public firstNumber: number;
  public secondNumber: number;
  public maxNumber: number;
  public totalSum: number;

  ngOnInit(): void {
    this.initializeDefaults();
    this.totalSum = this.getTotalSum(this.firstNumber, this.secondNumber, this.maxNumber);
  }

  // maxNumber > both numbers > 0 AND all numbers are integers
  private initializeDefaults(): void {
    this.firstNumber = 3;
    this.secondNumber = 5;
    this.maxNumber = 1000;
  }

  private getN(nr: number, max: number): number {
    if (max <= nr) {
      return 0;
    }
    return Math.trunc((max - 1) / nr);
  }

  private getTotalSum(firstNr: number, secondNr: number, max: number): number {
    return this.addSeries(firstNr, max) + this.addSeries(secondNr, max) - this.addSeries(firstNr * secondNr, max);
  }

  // 1 * nr + 2 * nr + ...
  private addSeries(nr: number, max: number): number {
    return nr * this.addStandardSeries(this.getN(nr, max));
  }

  // 1 + 2 + 3 + ... + n
  private addStandardSeries(n: number) {
    return n * (n + 1) / 2;
  }
}
