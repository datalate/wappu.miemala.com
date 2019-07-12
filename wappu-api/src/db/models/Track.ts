import {Column, CreatedAt, Model, Table, UpdatedAt, AllowNull} from 'sequelize-typescript';

@Table
export class Track extends Model<Track> {
    @Column
    artist!: string;

    @AllowNull(false)
    @Column
    title!: string;

    @AllowNull(false)
    @Column
    playedAt!: Date;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
