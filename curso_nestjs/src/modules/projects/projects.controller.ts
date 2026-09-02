import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectlistItemDTO, ProjectRequestDTO } from './projects.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller({
  version: '1',
  path: 'projects',
})
export class ProjectsController {

  constructor(
    private readonly projectsService: ProjectsService
  ) { }

  @Get()
  @ApiResponse({
    type: [ProjectlistItemDTO],
  })
  findAll() {

    return this.projectsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    type: ProjectlistItemDTO,
  })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectsService.findById(id);
  }

  @Post()
  @ApiResponse({
    type: ProjectlistItemDTO,
  })
  create(@Body() data: ProjectRequestDTO) {
    return this.projectsService.create(data);
  }

  @Put(':id')
  @ApiResponse({
    type: ProjectlistItemDTO,
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() data: ProjectRequestDTO
  ) {
    return this.projectsService.update(id, data);

  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectsService.remove(id);
  }



}




