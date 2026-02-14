import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getHello(): object {
    return { message: 'hello world' };
  }
  getAdminByID(id: number): object {
    return { id: id };
  }
  getAll(): object {
    return { message: 'all admin' };
  }
}
