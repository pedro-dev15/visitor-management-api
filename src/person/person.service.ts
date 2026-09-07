import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePersonDto) {
    return this.prisma.person.create({ data: dto });
  }

  findAll() {
    return this.prisma.person.findMany();
  }

  findByDocument(document: string) {
    return this.prisma.person.findUnique({ where: { document } });
  }
}
