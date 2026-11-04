import { PrismaService } from "../../prisma.service";
import { ProjectRequestDTO } from './projects.dto';
export declare class ProjectsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }[]>;
    findById(id: string): import("@prisma/client").Prisma.Prisma__ProjectClient<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    create(data: ProjectRequestDTO): import("@prisma/client").Prisma.Prisma__ProjectClient<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: ProjectRequestDTO): import("@prisma/client").Prisma.Prisma__ProjectClient<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ProjectClient<{
        description: string | null;
        name: string;
        id: string;
        updatedAt: Date;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
