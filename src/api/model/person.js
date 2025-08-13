import { Model, DataTypes } from "sequelize";

class person extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            document: DataTypes.STRING,
            state: DataTypes.STRING,
            city: DataTypes.STRING
        },
        {
            sequelize: sequelize,
            freezeTableName: true
        }
    )
    }
}

export default person;