import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ProjectRequestDTO {

  @ApiProperty({ description: 'project name' })
  @IsString()
  @IsNotEmpty()
  name: string 

  @ApiProperty({ description: 'PROJECT DESCRIPTION', required: false })
  @IsString()
  description: string
}
