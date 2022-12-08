import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('api')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    const member = await this.rocketMembersRepository.create(
      name,
      memberFunction,
    );
    return {
      member,
    };
  }
}
