import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTablesRelations1617325428471
  implements MigrationInterface {
  name = 'CreateTablesRelations1617325428471';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "projects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "naversId" uuid, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "navers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "name" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "admission_date" TIMESTAMP NOT NULL, "job_role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "projectsId" uuid, CONSTRAINT "PK_b746f976ea9a66d08340b1ba1ad" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "projects" ADD CONSTRAINT "FK_bd55b203eb9f92b0c8390380010" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "projects" ADD CONSTRAINT "FK_9305f08e7b77a3cd8d4b4fa3a42" FOREIGN KEY ("naversId") REFERENCES "navers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "navers" ADD CONSTRAINT "FK_39b7d3bc33b1e1fb27649d91e37" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "navers" ADD CONSTRAINT "FK_7af9f32098311472fa9812e70e4" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "navers" DROP CONSTRAINT "FK_7af9f32098311472fa9812e70e4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "navers" DROP CONSTRAINT "FK_39b7d3bc33b1e1fb27649d91e37"`,
    );
    await queryRunner.query(
      `ALTER TABLE "projects" DROP CONSTRAINT "FK_9305f08e7b77a3cd8d4b4fa3a42"`,
    );
    await queryRunner.query(
      `ALTER TABLE "projects" DROP CONSTRAINT "FK_bd55b203eb9f92b0c8390380010"`,
    );
    await queryRunner.query(`DROP TABLE "navers"`);
    await queryRunner.query(`DROP TABLE "projects"`);
  }
}
