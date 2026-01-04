import { Component } from '@angular/core';

interface Todo {
  title: string;
  subtitle: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  todos: Todo[] = [];

  // ADD
  showAdd = false;
  title = '';
  subtitle = '';

  // EDIT
  showEdit = false;
  editIndex: number | null = null;
  editTitle = '';
  editSubtitle = '';

  /* ADD TASK */
  openAdd() {
    this.showAdd = true;
  }

  addTask() {
    if (!this.title.trim()) return;

    this.todos.push({
      title: this.title,
      subtitle: this.subtitle,
      completed: false
    });

    this.title = '';
    this.subtitle = '';
    this.showAdd = false;
  }

  /* EDIT TASK */
  openEdit(todo: Todo, index: number) {
    this.editIndex = index;
    this.editTitle = todo.title;
    this.editSubtitle = todo.subtitle;
    this.showEdit = true;
  }

  updateTask() {
    if (this.editIndex === null) return;

    this.todos[this.editIndex].title = this.editTitle;
    this.todos[this.editIndex].subtitle = this.editSubtitle;

    this.closeEdit();
  }

  closeEdit() {
    this.showEdit = false;
    this.editIndex = null;
  }

  /* DELETE */
  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }
}
