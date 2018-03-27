import {
    Table, Model, Column, PrimaryKey, DataType, AutoIncrement, ForeignKey, BelongsTo
} from "sequelize-typescript";

@Table({timestamps: true})
export class PaymentOption extends Model<PaymentOption> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column({allowNull: false})
    productCode: string;

    @Column({allowNull: false})
    productDescription: string;

    @Column({allowNull: false})
    productTerm: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    productRate: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    monthlyPayment: number;

    @Column({allowNull: false, type: DataType.FLOAT})
    savingsInInterest: number;

    @Column
    get dti(): number {
        return this.getDataValue('monthlyPayment');
    }

    @Column({allowNull: false, type: DataType.FLOAT})
    residualIncome: number;

}