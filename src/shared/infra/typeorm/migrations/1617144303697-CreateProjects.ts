import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateProjects1617144303697 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'users_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'navers_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'projects',
      new TableForeignKey({
        name: 'ProjectsUser',
        columnNames: ['users_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('projects', 'ProjectsUser');
    await queryRunner.dropTable('projects');
  }
}
