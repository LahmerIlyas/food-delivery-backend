import {MigrationInterface, QueryRunner} from "typeorm";

export class init1617448636989 implements MigrationInterface {
    name = 'init1617448636989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('utilisateur', 'admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "email" text NOT NULL, "hashed_password" text NOT NULL, "token" text, "refresh_token" text, "google_id" text, "apple_id" text, "facebook_id" text, "avatar_id" integer, "phone_number" text, "role" "user_role_enum" NOT NULL DEFAULT 'utilisateur', "last_activity" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_7adac5c0b28492eb292d4a93871" UNIQUE ("google_id"), CONSTRAINT "UQ_fda2d885fb612212b85752f5ab1" UNIQUE ("apple_id"), CONSTRAINT "UQ_189473aaba06ffd667bb024e71a" UNIQUE ("facebook_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying, "name" character varying, "alt" character varying, "size" integer, "mime_type" character varying, "owner_id" integer, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "log" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "operation" text, "scope" text, "data" json, "user_id" integer, CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "session" ("id" character varying NOT NULL, "expiresAt" integer NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_b777e56620c3f1ac0308514fc4c" FOREIGN KEY ("avatar_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_cccc7b3ca9b0c44aaa4ac0cacfb" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "log" ADD CONSTRAINT "FK_0d5473a41a198fd20e7920889b0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "log" DROP CONSTRAINT "FK_0d5473a41a198fd20e7920889b0"`);
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_cccc7b3ca9b0c44aaa4ac0cacfb"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_b777e56620c3f1ac0308514fc4c"`);
        await queryRunner.query(`DROP TABLE "session"`);
        await queryRunner.query(`DROP TABLE "log"`);
        await queryRunner.query(`DROP TABLE "file"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
    }

}
