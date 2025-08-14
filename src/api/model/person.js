import { Model, DataTypes } from "sequelize";

class person extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            document: {
                type: DataTypes.STRING
            },
            state: {
                type: DataTypes.STRING
            },
            city: {
                type: DataTypes.STRING
            },
            token: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize: sequelize,
            freezeTableName: true
        });
    }
}

export default person;