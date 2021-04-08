import {MigrationInterface, QueryRunner} from "typeorm";
import { seedDB } from './seed';

export class seed1617881505230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await seedDB();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
