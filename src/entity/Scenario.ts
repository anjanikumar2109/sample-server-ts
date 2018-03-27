import {
    Table, Model, Column, PrimaryKey, DataType, AutoIncrement, ForeignKey, BelongsTo
} from "sequelize-typescript";
import {Contact} from "./Contact";

@Table({timestamps: true})
export class Scenario extends Model<Scenario> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    totalRevolvingDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    totalInstallmentDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    productDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    educationDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    mortgageDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    helocDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    monthlyRentDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    otherDebt: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    cashLiquidity: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    brokerageLiquidity: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    amexLiquidity: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    retirementLiquidity: number;

    @ForeignKey(() => Contact)
    @Column
    contactId: number;

    @BelongsTo(() => Contact)
    contact: Contact;

    @Column({type: DataType.TEXT})
    comment: string;
}