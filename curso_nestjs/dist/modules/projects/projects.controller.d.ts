import { ProjectsService } from './projects.service';
import { ProjectRequestDTO } from './projects.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): string[];
    findOne(id: string): string;
    create(data: ProjectRequestDTO): string;
    update(id: string, data: ProjectRequestDTO): string;
    remove(id: string): string;
}
