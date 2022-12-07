module.exports = function (sequelize, DataTypes) {
    let alias = "Actor";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    };

    let config = {
        timestamps: false,
        tableName: 'actors'
    }
    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, {
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "movie_id",
            timestamps: false,
        });
    }

    return Actor;
}