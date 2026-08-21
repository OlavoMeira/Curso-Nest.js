import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): string[];
    findOne(id: string): string;
    create(data: any): string;
    update(id: string, data: any): string;
    remove(id: string): string;
}
