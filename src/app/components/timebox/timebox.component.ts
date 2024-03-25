import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ITimebox} from "../../interfaces";
import {TimeboxStoreService} from "../../services";

@Component({
  selector: 'bit-timebox',
  templateUrl: './timebox.component.html',
  styleUrls: ['./timebox.component.scss'],
})
export class TimeboxComponent implements OnInit {
  @Input() timeBox!: ITimebox;

  timeBoxInputForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: TimeboxStoreService
  ) { }

  ngOnInit(): void {
    this.initFormGroup();
    this.timeBoxInputForm.patchValue(this.timeBox);
  }

  private initFormGroup(): void {
    this.timeBoxInputForm = this.fb.group({
      task: ['', Validators.required],
      duration: [],
      id: []
    });
  }

  onSaveClick(): void {
    this.store.timeBoxActions.update(this.timeBoxInputForm.value);
    this.timeBoxInputForm.markAsPristine();
  }

  onDeleteClick(): void {
    this.store.timeBoxActions.remove(this.timeBoxInputForm.value)
  }
}
