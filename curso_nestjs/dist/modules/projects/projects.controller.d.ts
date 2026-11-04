import { ProjectRequestDTO } from './projects.dto';
import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
    create(data: ProjectRequestDTO): import("@prisma/client").Prisma.Prisma__ProjectClient<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: ProjectRequestDTO): Promise<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }>;
}
