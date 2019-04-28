import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = {
    designTasks: [
      {
        id: 1,
        title: 'Header',
        description: 'First, we need to create a header component with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      },
      {
        id: 2,
        title: 'footer',
        description: 'First, we need to create a footer component with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      }
    ],
    frontTasks: [
      {
        id: 3,
        title: 'Settings Page',
        description: 'Settings Page with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      }
      ,
      {
        id: 4,
        title: 'share page',
        description: 'First, we need to create a footer component with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      }
    ],
    developTasks: [
      {
        id: 5,
        title: 'contact page',
        description: 'contact Page with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      }
      ,
      {
        id: 6,
        title: 'about-us page',
        description: 'First, we need to create a footer component with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      }
    ],
    boardTasks: [
      {
        id: 7,
        title: 'home page',
        description: 'Home Page with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      }
      ,
      {
        id: 8,
        title: 'about-us page',
        description: 'First, we need to create a footer component with specific design',
        effectAllowed: "move",
        disable: false,
        handle: false,
      }
    ]
  };

  constructor() { }
  getTasks(){
    return this.tasks;
  }
}
