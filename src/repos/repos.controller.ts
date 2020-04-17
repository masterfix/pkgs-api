import { Controller, Get } from '@nestjs/common';

@Controller('repos')
export class ReposController {

    @Get()
    getAll() {
        return [
            {
                id: 1,
                name: 'core',
                arch: 'x86_64'
            },
            {
                id: 2,
                name: 'addon',
                arch: 'x86_64'
            },
        ];
    }

}
