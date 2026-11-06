import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    fundAllByproject(projectId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
    }[]>;
    create(projectId: string, data: any): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
    }>;
    findOne(projectId: string, taskId: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
    } | null>;
    update(projectId: string, taskId: string, data: any): Promise<{
        id: string;
        title: string;
        description: string | null;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
        projectId: string;
    }>;
    remove(projectId: string, taskId: string): Promise<void>;
}
