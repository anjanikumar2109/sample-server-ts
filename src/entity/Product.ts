import {
    Table, Model, Column, PrimaryKey, DataType
} from "sequelize-typescript";

@Table({timestamps: true})
export class Product extends Model<Product> {

    @PrimaryKey
    @Column({allowNull: false, unique: true})
    code: string;

    @Column({allowNull: false})
    description: string;

    @Column({allowNull: false})
    term: number;

    @Column({allowNull: false, defaultValue: true})
    isActive: boolean;

    @Column({allowNull: false, type: DataType.FLOAT})
    rate: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    savingsRate: number;
}