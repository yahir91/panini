import { MigrationInterface, QueryRunner } from "typeorm";

export class initialEntities1671034543260 implements MigrationInterface {
    name = 'initialEntities1671034543260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Picture" ("Id" SERIAL NOT NULL, "CreateTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdateTime" TIMESTAMP DEFAULT now(), "DeleteTime" TIMESTAMP, "stampId" integer NOT NULL, "Url" character varying NOT NULL, "Key" character varying NOT NULL, CONSTRAINT "REL_3365d6e26919d013b0762f6d6a" UNIQUE ("stampId"), CONSTRAINT "PK_800c2deb303d36e780dcae13a70" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "public"."Stamps_country_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7')`);
        await queryRunner.query(`CREATE TABLE "Stamps" ("Id" SERIAL NOT NULL, "CreateTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdateTime" TIMESTAMP DEFAULT now(), "DeleteTime" TIMESTAMP, "Country" "public"."Stamps_country_enum" NOT NULL, "Player" character varying(100) NOT NULL, "albumId" integer, CONSTRAINT "PK_712cbcc3b54a19ff8374aeb7186" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("Id" SERIAL NOT NULL, "CreateTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdateTime" TIMESTAMP DEFAULT now(), "DeleteTime" TIMESTAMP, "FullName" character varying(100) NOT NULL, CONSTRAINT "PK_329bb2946729a51bd2b19a5159f" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Album" ("Id" SERIAL NOT NULL, "CreateTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdateTime" TIMESTAMP DEFAULT now(), "DeleteTime" TIMESTAMP, "userId" integer, CONSTRAINT "REL_2390f98afbd0d58622d48da6eb" UNIQUE ("userId"), CONSTRAINT "PK_a3c53096b5013acc0c7f146a426" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "Picture" ADD CONSTRAINT "FK_3365d6e26919d013b0762f6d6ac" FOREIGN KEY ("stampId") REFERENCES "Stamps"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Stamps" ADD CONSTRAINT "FK_3ab50cf9ead2196b26b3552a2db" FOREIGN KEY ("albumId") REFERENCES "Album"("Id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Album" ADD CONSTRAINT "FK_2390f98afbd0d58622d48da6ebf" FOREIGN KEY ("userId") REFERENCES "Users"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Album" DROP CONSTRAINT "FK_2390f98afbd0d58622d48da6ebf"`);
        await queryRunner.query(`ALTER TABLE "Stamps" DROP CONSTRAINT "FK_3ab50cf9ead2196b26b3552a2db"`);
        await queryRunner.query(`ALTER TABLE "Picture" DROP CONSTRAINT "FK_3365d6e26919d013b0762f6d6ac"`);
        await queryRunner.query(`DROP TABLE "Album"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Stamps"`);
        await queryRunner.query(`DROP TYPE "public"."Stamps_country_enum"`);
        await queryRunner.query(`DROP TABLE "Picture"`);
    }

}
