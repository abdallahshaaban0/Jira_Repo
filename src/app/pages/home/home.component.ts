import { Component, OnInit, TemplateRef } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks;
  modalRef: BsModalRef;
  taskForm: FormGroup;

  constructor(private taskService: TaskService, private modalService: BsModalService) {
    this.taskForm = new FormGroup({
      'title': new FormControl('', [Validators.required]),
      'description': new FormControl('')
    })
  }

  ngOnInit() {
    this.getTasksData();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  getTasksData() {
    this.tasks = this.taskService.getTasks();
  }
  submitForm() {
    this.tasks.designTasks.push({
      id: this.tasks.designTasks.length + 1,
      title: this.taskForm.get('title').value,
      description: this.taskForm.get('description').value,
      effectAllowed: "move",
      disable: false,
      handle: false,
    })
    debugger;
    this.taskForm.reset();
    this.modalRef.hide();
  }
}
