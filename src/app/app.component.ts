import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from './add-post/add-post.component';
import { CareersService } from './services/careers.service';
import { MatCard } from '@angular/material/card';
import { ApplyPostComponent } from './apply-post/apply-post.component';
import { AppliedService } from './services/applied.service';
import { CommonService } from './service/common.service'

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = [
    'id',
    'jobPosition',
    'location',
    'experience',
    'dateOfPost',
    'qualification',
    
  ];
  dataSource!: MatCard;
  careerPostData: any;
  appliedData: any;
  apiService: any;
  listOfJobs: boolean = true;
  listOfAppliedCandidates: boolean = false;


  displayedTableColumns: string[] = [
    'name',
    'email',
    'mobile',
    'message',
    'careerId',
    'actions'
  ];
  
  datatableSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;




  constructor(
    public _dialog: MatDialog,
    public _careerService: CareersService,
    public _appliedService: AppliedService,
    private shared:CommonService,
  ) { }


  openAddPostForm() {
    const dialogRef = this._dialog.open(AddPostComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCareersList();
        }
      }
    })
  };

  jobsList() {
    this.listOfJobs = true;
    this.listOfAppliedCandidates = false;
  };
  candidatesList() {
    this.getAppliedList();
    this.listOfAppliedCandidates = true;
    this.listOfJobs = false;
  };
  openApplyForm(careerData:any) {
    //console.log(careerData)
    this.shared.setMessage(careerData)
    this._dialog.open(ApplyPostComponent)
  };
  message:any;
  ngOnInit(): void {
    this.getCareersList();
    this.getAppliedList();
  }

  getCareersList() {
    this._careerService.getPost().subscribe({
      next: (res: any) => {
        this.dataSource = new MatCard(res);
        this.careerPostData = res.careers;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getAppliedList() {
    this._appliedService.getAppliedPostList().subscribe({
      next: (res: any) => {
        this.appliedData = res.applyList;
        this.datatableSource =this.appliedData;
        // console.log(this.appliedData);
        
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  deleteApplyList(id:number){
    this._appliedService.deleteApplyList(id).subscribe({
      next:(res)=>{
        alert('deleted successfully');
        this.getAppliedList();
      },
      error:console.log
      
    });
  }
}


