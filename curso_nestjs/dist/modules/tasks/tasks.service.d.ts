import { PrismaService } from "../../prisma.service";
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllByProject(projectId: string): Promise<{
        description: string | null;
        title: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        projectId: string;
    }[]>;
    findById(projectId: string, taskId: string): Promise<{
        description: string | null;
        title: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        projectId: string;
    } | null>;
    create(projectId: string, data: any): Promise<{
        description: string | null;
        title: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        projectId: string;
    }>;
    update(projectId: string, taskId: string, data: any): Promise<{
        description: string | null;
        title: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
        status: import("@prisma/client").$Enums.TaskStatus;
        priority: import("@prisma/client").$Enums.TaskPriority;
        dueDate: Date | null;
        projectId: string;
    }>;
    delete(projectId: string, taskId: string): Promise<void>;
}
