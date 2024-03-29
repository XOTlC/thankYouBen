import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "thanks" })

export class Thanks extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    message: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    ipAddress: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    isVerified: boolean;
}