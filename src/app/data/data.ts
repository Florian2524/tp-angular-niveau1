import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription, from, interval, concatMap, map, take } from 'rxjs';
import { DataService } from '../dataService';

@Component({
  selector: 'app-data',
  imports: [CommonModule],
  templateUrl: './data.html',
  styleUrl: './data.css',
})
export class Data implements OnInit, OnDestroy {
  numbers: number[] = [];
  subscription!: Subscription;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.dataService.getData().pipe(
      concatMap((data) =>
        from(data).pipe(
          concatMap((number) =>
            interval(500).pipe(
              take(1),
              map(() => number)
            )
          )
        )
      )
    ).subscribe((number) => {
      this.numbers.push(number);
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}