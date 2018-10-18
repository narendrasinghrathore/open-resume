import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GenerateControlsService } from 'src/services/generate-controls.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  profileForm: FormGroup;
  questions: any[];

  constructor(service: GenerateControlsService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
    });
  }
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];
  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event)
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }
}
