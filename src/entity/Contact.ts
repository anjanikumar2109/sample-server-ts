import {
    Table, Model, Column, PrimaryKey, DataType, AutoIncrement, HasMany
} from "sequelize-typescript";
import {Scenario} from "./Scenario";

@Table({timestamps: true})
export class Contact extends Model<Contact> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column({allowNull: false})
    name: string;

    @Column({allowNull: false})
    birthday: Date;

    @Column({type: new DataType.VIRTUAL(DataType.BOOLEAN, ['birthday'])})
    get retired(): boolean {
        const today = new Date();
        const birthDate = this.get('birthday');
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age < 60;
    }

    @Column({allowNull: false, type: DataType.FLOAT})
    yearlyGrossIncome: number;

    @Column({type: new DataType.VIRTUAL(DataType.FLOAT, ['yearlyGrossIncome'])})
    get monthlyGrossIncome(): number {
        return this.get('yearlyGrossIncome') / 12;
    }

    @HasMany(() => Scenario)
    scenarios: Scenario[];
}