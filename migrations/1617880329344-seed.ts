import {MigrationInterface, QueryRunner} from "typeorm";
import { seedDB } from './seed';

export class seed1617880329344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await seedDB();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
