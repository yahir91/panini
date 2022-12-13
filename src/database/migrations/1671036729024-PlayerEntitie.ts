import { MigrationInterface, QueryRunner } from "typeorm";

export class PlayerEntitie1671036729024 implements MigrationInterface {
    name = 'PlayerEntitie1671036729024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."Players_country_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7')`);
        await queryRunner.query(`CREATE TABLE "Players" ("Id" SERIAL NOT NULL, "CreateTime" TIMESTAMP NOT NULL DEFAULT now(), "UpdateTime" TIMESTAMP DEFAULT now(), "DeleteTime" TIMESTAMP, "FullName" character varying(100) NOT NULL, "Country" "public"."Players_country_enum" NOT NULL, CONSTRAINT "PK_9b90d9890b42d02bf9a698c1471" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "Stamps" DROP COLUMN "Country"`);
        await queryRunner.query(`DROP TYPE "public"."Stamps_country_enum"`);
        await queryRunner.query(`ALTER TABLE "Stamps" DROP COLUMN "Player"`);
        await queryRunner.query(`ALTER TABLE "Stamps" ADD "PlayerId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Stamps" ADD CONSTRAINT "FK_77169ba90746e0e4e153c591965" FOREIGN KEY ("PlayerId") REFERENCES "Players"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Stamps" DROP CONSTRAINT "FK_77169ba90746e0e4e153c591965"`);
        await queryRunner.query(`ALTER TABLE "Stamps" DROP COLUMN "PlayerId"`);
        await queryRunner.query(`ALTER TABLE "Stamps" ADD "Player" character varying(100) NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."Stamps_country_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7')`);
        await queryRunner.query(`ALTER TABLE "Stamps" ADD "Country" "public"."Stamps_country_enum" NOT NULL`);
        await queryRunner.query(`DROP TABLE "Players"`);
        await queryRunner.query(`DROP TYPE "public"."Players_country_enum"`);
    }

}
