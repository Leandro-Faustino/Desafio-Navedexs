import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateNavers1617144046521 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'navers',
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
            name: 'projects_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'birthDate',
            type: 'timestamp',
          },
          {
            name: 'admission_date',
            type: 'timestamp',
          },
          {
            name: 'job_role',
            type: 'varchar',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'navers',
      new TableForeignKey({
        name: 'NaversUser',
        columnNames: ['users_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('navers', 'NaversUser');
    await queryRunner.dropTable('navers');
  }
}
