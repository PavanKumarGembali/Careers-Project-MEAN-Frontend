import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppliedService } from '../services/applied.service';
import { DialogRef } from '@angular/cdk/dialog';
import { CommonService } from '../service/common.service'
@Component({
  selector: 'app-apply-post',
  templateUrl: './apply-post.component.html',
  styleUrls: ['./apply-post.component.scss']
})
export class ApplyPostComponent {
  applyForm: FormGroup;
  jobPosition:any
  careerData:any
  _id:any
  constructor(
    private _fb: FormBuilder,
    private _appliedService: AppliedService,
    private _dialougeRef: DialogRef<ApplyPostComponent>,
    private shared: CommonService,
  ) {
    this.applyForm = this._fb.group({
      name: '',
      email: ['',[Validators.required, Validators.email]],
      mobile: '',
      message: '',
      careerId:'',
    })
  }
  
  ngOnInit():void{

    this.careerData=this.shared.getMessage()
    this.jobPosition = this.careerData.jobPosition;
  };
  onFormSubmit() {
    if (this.applyForm.valid) {
      this.applyForm.controls['careerId'].setValue(this.careerData._id)
      this._appliedService.appliedPost(this.applyForm.value).subscribe({
        next: (val: any) => {
          
          alert("applied successfully");
          this._dialougeRef.close()
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
  }
}
