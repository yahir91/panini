import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedPlayerEntity1671038001245 implements MigrationInterface {
    name = 'UpdatedPlayerEntity1671038001245'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Players" DROP COLUMN "Country"`);
        await queryRunner.query(`DROP TYPE "public"."Players_country_enum"`);
        await queryRunner.query(`ALTER TABLE "Players" ADD "Country" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Players" DROP COLUMN "Country"`);
        await queryRunner.query(`CREATE TYPE "public"."Players_country_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7')`);
        await queryRunner.query(`ALTER TABLE "Players" ADD "Country" "public"."Players_country_enum" NOT NULL`);
    }

}
