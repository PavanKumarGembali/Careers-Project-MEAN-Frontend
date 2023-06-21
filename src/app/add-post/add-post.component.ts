import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CareersService } from '../services/careers.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {

  jobForm: FormGroup;

  qualification: string[] = [
    'BSc',
    'BCOM',
    'MSc',
    'MBA',
    'B.Tech',
    'M.Tech',
  ];

  constructor(private _fb: FormBuilder,
    private _careersService: CareersService,
    private _dialogRef: MatDialogRef<AddPostComponent>,
    private shared: CommonService,
  ) {
    this.jobForm = this._fb.group({
      jobPosition: '',
      location: '',
      experience: '',
      dateOfPost: '',
      qualification: '',
    })
  }
  ngOnInit():void{
  }
  onFormSubmit() {
    if (this.jobForm.valid) {
      this._careersService.addPost(this.jobForm.value).subscribe({
        next: (val: any) => {
          alert('career posted sucessfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
  }
}
