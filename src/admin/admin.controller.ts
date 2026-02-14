import { Controller, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): object {
    return this.adminService.getHello();
  }

  @Get('getall')
  getAll(): object {
    return this.adminService.getAll();
  }

  @Get(':id')
  getAdminByID(@Param('id') id: number): object {
    console.log(typeof id);
    return this.adminService.getAdminByID(id);
  }
}
