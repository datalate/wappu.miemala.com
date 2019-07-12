import {Column, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript';

@Table
export class Track extends Model<Track> {
    @Column
    artist!: string;

    @Column
    title!: string;

    @Column
    playedAt!: Date;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
