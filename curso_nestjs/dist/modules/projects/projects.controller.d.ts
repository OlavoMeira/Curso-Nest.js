import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): void;
    findOne(id: string): void;
    create(data: any): void;
    update(id: string, data: any): void;
    remove(id: string): void;
}
