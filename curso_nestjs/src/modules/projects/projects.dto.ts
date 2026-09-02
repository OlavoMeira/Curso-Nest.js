import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
import { format } from "path";

export class ProjectRequestDTO {

  @ApiProperty({ description: 'project name' })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({ description: 'PROJECT DESCRIPTION', required: false })
  @IsString()
  description: string
}

export class ProjectlistItemDTO {
  @ApiProperty() id: string;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
  @ApiProperty({ format: 'date-time' }) createAt: string;
  @ApiProperty({ format: 'date-time' }) updatedAt: string;
}