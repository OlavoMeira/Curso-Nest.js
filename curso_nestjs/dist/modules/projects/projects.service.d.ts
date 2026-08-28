import { ProjectRequestDTO } from './projects.dto';
export declare class ProjectsService {
    findAll(): string[];
    findById(id: string): string;
    create(data: ProjectRequestDTO): string;
    update(id: string, data: ProjectRequestDTO): string;
    remove(id: string): string;
}
