import {MigrationInterface, QueryRunner} from "typeorm";

export class init1617875502450 implements MigrationInterface {
    name = 'init1617875502450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying, "name" character varying, "alt" character varying, "size" integer, "mime_type" character varying, "owner_id" integer, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_card" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "card_holder" text NOT NULL, "card_number" text NOT NULL, "card_cvv" text NOT NULL, "user_id" integer, CONSTRAINT "PK_e7db2e329f0b1eb57cde248596c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_category" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "description" text NOT NULL, "logo_id" integer, CONSTRAINT "PK_b48a8ae5805bf20bce9963b6954" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "description" text NOT NULL, "logo_id" integer, "cover_id" integer, "address" text, "location" geometry(Point,4326), "phone_number" text NOT NULL, "delivery_cost" integer NOT NULL, "delivery_duration" integer NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a4e247203bbc0618c88786121c" ON "restaurant" USING GiST ("location") `);
        await queryRunner.query(`CREATE TABLE "meal" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "description" text NOT NULL, "cover_id" integer, "cost" integer NOT NULL, "meal_category" integer, "restaurant" integer, CONSTRAINT "PK_ada510a5aba19e6bb500f8f7817" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meal_review" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "stars" integer NOT NULL, "user_id" integer, "meal_id" integer, CONSTRAINT "PK_e4f82b1fd39d50322547aa65143" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('utilisateur', 'admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "email" text NOT NULL, "hashed_password" text NOT NULL, "token" text, "refresh_token" text, "google_id" text, "apple_id" text, "facebook_id" text, "avatar_id" integer, "phone_number" text, "role" "user_role_enum" NOT NULL DEFAULT 'utilisateur', "last_activity" TIMESTAMP WITH TIME ZONE, "enable_promotional_emails" boolean NOT NULL DEFAULT true, "enable_monthly_newsletter" boolean NOT NULL DEFAULT true, "enable_feedback_collection" boolean NOT NULL DEFAULT true, "enable_discount_notifications" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_7adac5c0b28492eb292d4a93871" UNIQUE ("google_id"), CONSTRAINT "UQ_fda2d885fb612212b85752f5ab1" UNIQUE ("apple_id"), CONSTRAINT "UQ_189473aaba06ffd667bb024e71a" UNIQUE ("facebook_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "street_name" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "zip_code" text NOT NULL, "user_id" integer, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "log" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "operation" text, "scope" text, "data" json, "user_id" integer, CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "session" ("id" character varying NOT NULL, "expiresAt" integer NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_favorite_meals_meal" ("userId" integer NOT NULL, "mealId" integer NOT NULL, CONSTRAINT "PK_9ab30d5f5cd056d3a1d40f15ea9" PRIMARY KEY ("userId", "mealId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5103379c6c3dcdc47f2a22ab33" ON "user_favorite_meals_meal" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_238c6232af3d324e4215a0cbd3" ON "user_favorite_meals_meal" ("mealId") `);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_cccc7b3ca9b0c44aaa4ac0cacfb" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_card" ADD CONSTRAINT "FK_2418c2c43a6ba5eaaa69b9c2ba5" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_category" ADD CONSTRAINT "FK_67cc422439653fddbad12b79c79" FOREIGN KEY ("logo_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "FK_c6f5ed806b06026ee4f15dc6fd7" FOREIGN KEY ("logo_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "FK_4d60b05d0968389826974e5c400" FOREIGN KEY ("cover_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal" ADD CONSTRAINT "FK_c2637c87d1bfe5a452d3290f52b" FOREIGN KEY ("cover_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal" ADD CONSTRAINT "FK_29ae88dcea6224a4e7194968129" FOREIGN KEY ("meal_category") REFERENCES "meal_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal" ADD CONSTRAINT "FK_24a2c9ac08834562a9f55fe8a1e" FOREIGN KEY ("restaurant") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_review" ADD CONSTRAINT "FK_74d0ba050e795b42c3b93f89234" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "meal_review" ADD CONSTRAINT "FK_17fa0d10fdd409cd54cb0a7ee38" FOREIGN KEY ("meal_id") REFERENCES "meal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_b777e56620c3f1ac0308514fc4c" FOREIGN KEY ("avatar_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "log" ADD CONSTRAINT "FK_0d5473a41a198fd20e7920889b0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_favorite_meals_meal" ADD CONSTRAINT "FK_5103379c6c3dcdc47f2a22ab337" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_favorite_meals_meal" ADD CONSTRAINT "FK_238c6232af3d324e4215a0cbd3d" FOREIGN KEY ("mealId") REFERENCES "meal"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_favorite_meals_meal" DROP CONSTRAINT "FK_238c6232af3d324e4215a0cbd3d"`);
        await queryRunner.query(`ALTER TABLE "user_favorite_meals_meal" DROP CONSTRAINT "FK_5103379c6c3dcdc47f2a22ab337"`);
        await queryRunner.query(`ALTER TABLE "log" DROP CONSTRAINT "FK_0d5473a41a198fd20e7920889b0"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_b777e56620c3f1ac0308514fc4c"`);
        await queryRunner.query(`ALTER TABLE "meal_review" DROP CONSTRAINT "FK_17fa0d10fdd409cd54cb0a7ee38"`);
        await queryRunner.query(`ALTER TABLE "meal_review" DROP CONSTRAINT "FK_74d0ba050e795b42c3b93f89234"`);
        await queryRunner.query(`ALTER TABLE "meal" DROP CONSTRAINT "FK_24a2c9ac08834562a9f55fe8a1e"`);
        await queryRunner.query(`ALTER TABLE "meal" DROP CONSTRAINT "FK_29ae88dcea6224a4e7194968129"`);
        await queryRunner.query(`ALTER TABLE "meal" DROP CONSTRAINT "FK_c2637c87d1bfe5a452d3290f52b"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "FK_4d60b05d0968389826974e5c400"`);
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "FK_c6f5ed806b06026ee4f15dc6fd7"`);
        await queryRunner.query(`ALTER TABLE "meal_category" DROP CONSTRAINT "FK_67cc422439653fddbad12b79c79"`);
        await queryRunner.query(`ALTER TABLE "payment_card" DROP CONSTRAINT "FK_2418c2c43a6ba5eaaa69b9c2ba5"`);
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_cccc7b3ca9b0c44aaa4ac0cacfb"`);
        await queryRunner.query(`DROP INDEX "IDX_238c6232af3d324e4215a0cbd3"`);
        await queryRunner.query(`DROP INDEX "IDX_5103379c6c3dcdc47f2a22ab33"`);
        await queryRunner.query(`DROP TABLE "user_favorite_meals_meal"`);
        await queryRunner.query(`DROP TABLE "session"`);
        await queryRunner.query(`DROP TABLE "log"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "meal_review"`);
        await queryRunner.query(`DROP TABLE "meal"`);
        await queryRunner.query(`DROP INDEX "IDX_a4e247203bbc0618c88786121c"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
        await queryRunner.query(`DROP TABLE "meal_category"`);
        await queryRunner.query(`DROP TABLE "payment_card"`);
        await queryRunner.query(`DROP TABLE "file"`);
    }

}
