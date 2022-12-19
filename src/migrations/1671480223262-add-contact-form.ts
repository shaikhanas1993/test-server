import { MigrationInterface, QueryRunner } from 'typeorm';

export class addContactForm1671480223262 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS contact_form_table (id INT(11) NOT NULL AUTO_INCREMENT,
         firstName VARCHAR(100) NOT NULL,
         lastName VARCHAR(100) NOT NULL,
         email VARCHAR(100) NOT NULL,   
         message TEXT NOT NULL,   
         createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
         updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP, 
         PRIMARY KEY(id),
         UNIQUE INDEX email (email)
         )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contact_form_table');
  }
}
