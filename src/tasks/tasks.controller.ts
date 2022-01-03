import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskByID(@Param('id') id: string): Tasks {
    return this.tasksService.getTaskById(id);
  }
  @Post()
  CreateTask(@Body() createTaskDto: CreateTaskDto): Tasks {
    return this.tasksService.createTask(createTaskDto);
  }
  @Delete('/:id')
  removeTaskById(@Param('id') id: string): void {
    this.tasksService.removeTaskById(id);
  }
}
