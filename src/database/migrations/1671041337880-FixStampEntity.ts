import { MigrationInterface, QueryRunner } from "typeorm";

export class FixStampEntity1671041337880 implements MigrationInterface {
    name = 'FixStampEntity1671041337880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Stamps" DROP CONSTRAINT "FK_3ab50cf9ead2196b26b3552a2db"`);
        await queryRunner.query(`ALTER TABLE "Stamps" RENAME COLUMN "albumId" TO "AlbumId"`);
        await queryRunner.query(`ALTER TABLE "Stamps" ALTER COLUMN "AlbumId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Stamps" ADD CONSTRAINT "FK_0fa56dbe39c2b771f6a548e2803" FOREIGN KEY ("AlbumId") REFERENCES "Album"("Id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Stamps" DROP CONSTRAINT "FK_0fa56dbe39c2b771f6a548e2803"`);
        await queryRunner.query(`ALTER TABLE "Stamps" ALTER COLUMN "AlbumId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Stamps" RENAME COLUMN "AlbumId" TO "albumId"`);
        await queryRunner.query(`ALTER TABLE "Stamps" ADD CONSTRAINT "FK_3ab50cf9ead2196b26b3552a2db" FOREIGN KEY ("albumId") REFERENCES "Album"("Id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
