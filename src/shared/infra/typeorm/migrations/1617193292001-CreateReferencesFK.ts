import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateReferencesFK1617193292001
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'navers_projects_projects',
        columns: [
          {
            name: 'naversId',
            type: 'uuid',
            isPrimary: true,
            isNullable: true,
          },
          {
            name: 'projectsId',
            type: 'uuid',
            isPrimary: true,
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'projects_navers_navers',
        columns: [
          {
            name: 'projectsId',
            type: 'uuid',
            isPrimary: true,
            isNullable: true,
          },
          {
            name: 'naversId',
            type: 'uuid',
            isPrimary: true,
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'navers_projects_projects',
      new TableForeignKey({
        name: 'navers_navers_ref',
        columnNames: ['naversId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'navers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'navers_projects_projects',
      new TableForeignKey({
        name: 'navers_projects_ref',
        columnNames: ['projectsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'projects_navers_navers',
      new TableForeignKey({
        name: 'project_projects_ref',
        columnNames: ['projectsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'projects',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'projects_navers_navers',
      new TableForeignKey({
        name: 'project_navers_ref',
        columnNames: ['naversId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'navers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'projects_navers_navers',
      'project_navers_ref',
    );
    await queryRunner.dropForeignKey(
      'projects_navers_navers',
      'project_projects_ref',
    );
    await queryRunner.dropForeignKey(
      'navers_projects_projects',
      'navers_projects_ref',
    );
    await queryRunner.dropForeignKey(
      'navers_projects_projects',
      'navers_navers_ref',
    );

    await queryRunner.dropTable('projects_navers_navers');

    await queryRunner.dropTable('navers_projects_projects');
  }
}
