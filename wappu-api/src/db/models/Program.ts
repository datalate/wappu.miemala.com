import {AllowNull, Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';

@Table
export class Program extends Model<Program> {
  @AllowNull(false)
  @Column
  public title!: string;

  @AllowNull(false)
  @Column
  public startAt!: Date;

  @AllowNull(false)
  @Column
  public endAt!: Date;

  @CreatedAt
  @Column
  public createdAt!: Date;

  @UpdatedAt
  @Column
  public updatedAt!: Date;
}
