import { Body, Controller, Get, Post } from '@nestjs/common';
import { ManagementService } from './management.service';

@Controller('management')
export class ManagementController {
    constructor(
        private managementService: ManagementService
    ) {}

    @Get('/all')
    public async getAllUsers() {
        const getUsers = await this.managementService.getUsers()

        return {
            data: getUsers
        }
    }
}
