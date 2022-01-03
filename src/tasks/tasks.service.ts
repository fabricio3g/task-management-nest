import { Injectable } from '@nestjs/common';
import { Tasks, StatusTask } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  getAllTasks(): Tasks[] {
    return this.tasks;
  }

  getTaskById(id: string): Tasks {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTask: CreateTaskDto) {
    const { title, description } = createTask;

    const task: Tasks = {
      id: uuid(),
      title,
      description,
      status: StatusTask.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  removeTaskById(id: string): void{
    this.tasks = this.tasks.filter((tasks) => tasks.id !== id);
  }
}
