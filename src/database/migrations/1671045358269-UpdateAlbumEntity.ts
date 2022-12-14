import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAlbumEntity1671045358269 implements MigrationInterface {
    name = 'UpdateAlbumEntity1671045358269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Album" DROP CONSTRAINT "FK_2390f98afbd0d58622d48da6ebf"`);
        await queryRunner.query(`ALTER TABLE "Album" RENAME COLUMN "userId" TO "UserId"`);
        await queryRunner.query(`ALTER TABLE "Album" ALTER COLUMN "UserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Album" ADD CONSTRAINT "FK_178d14e6ff1b7cf7d342248e050" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Album" DROP CONSTRAINT "FK_178d14e6ff1b7cf7d342248e050"`);
        await queryRunner.query(`ALTER TABLE "Album" ALTER COLUMN "UserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Album" RENAME COLUMN "UserId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "Album" ADD CONSTRAINT "FK_2390f98afbd0d58622d48da6ebf" FOREIGN KEY ("userId") REFERENCES "Users"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
