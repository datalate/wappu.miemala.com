import {AllowNull, Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';

@Table
export class Track extends Model<Track> {
    @Column
    public artist!: string;

    @AllowNull(false)
    @Column
    public title!: string;

    @AllowNull(false)
    @Column
    public playedAt!: Date;

    @CreatedAt
    @Column
    public createdAt!: Date;

    @UpdatedAt
    @Column
    public updatedAt!: Date;
}
