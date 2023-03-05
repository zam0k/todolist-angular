import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  filter: String = 'all';

  todos: Item[] = [
    {
      content: 'Lorem Ipsum Aolor',
      isActive: false,
    },
    {
      content: 'Lorem Ipsum Bolor',
      isActive: false,
    },
    {
      content: 'Lorem Ipsum Dolor',
      isActive: true,
    },
    {
      content: 'Lorem Ipsum Color',
      isActive: true,
    },
  ];

  completedTodos: Item[] = [];

  activeTodos: Item[] = [];

  constructor() {}

  ngOnInit(): void {
    this.completedTodos = this.todos.filter((item) => item.isActive === true);
    this.activeTodos = this.todos.filter((item) => item.isActive === false);
  }

  showItems(filter: String) {
    if (filter === 'all') {
      this.filter = 'all';
    } else if (filter === 'completed') {
      this.filter = 'completed';
    } else {
      this.filter = 'active';
    }
  }

  clearCompletedTodos() {
    this.todos = this.activeTodos;
    this.completedTodos = [];
  }
}
