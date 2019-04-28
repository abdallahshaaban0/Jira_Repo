import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { IProject } from 'src/app/models/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.scss']
})
export class TasksCardComponent implements OnInit {
  modalRef: BsModalRef;
  task;
  taskForm;
  currentIndex;
  constructor(private modalService: BsModalService) { }

  @Input() Title;
  @Input() AreaData;
  ngOnInit() {
    this.taskForm = new FormGroup({
      'id': new FormControl(),
      'title': new FormControl('', [Validators.required]),
      'description': new FormControl('')
    })
  }
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  onDrop(event: DndDropEvent, list: any[]) {
    let index = event.index;

    if (typeof index === "undefined") {

      index = list.length;
    }

    list.splice(index, 0, event.data);
  }

  openModal(template: TemplateRef<any>, task, index) {
    this.modalRef = this.modalService.show(template);
    this.task = task;
    this.currentIndex = index;
    this.taskForm.controls['id'].setValue(task['id'], { onlySelf: true });
    this.taskForm.controls['title'].setValue(task['title'], { onlySelf: true });
    this.taskForm.controls['description'].setValue(task['description'], { onlySelf: true });
  }
  removeItem(id) {
    debugger;
    this.AreaData.splice(this.currentIndex, 1);
    this.modalRef.hide();
  }
  editForm() {
    const id = this.taskForm.get('id').value;
    this.AreaData.forEach((element, index) => {
      if (element.id == id) {
        element.title = this.taskForm.get('title').value;
        element.description = this.taskForm.get('description').value;
      }
    });

    this.modalRef.hide();
  }
}
