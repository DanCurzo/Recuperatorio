module.exports = function (sequelize, DataTypes) {
    let alias = "Movie";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        awards: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    };
    let config = {
        timestamps: false,
        tableName: 'movies'
    }
    const Movie = sequelize.define(alias, cols, config);

    // Una pelicula tiene un solo genero
    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: 'genre_id'
        })
        Movie.belongsToMany(models.Actor, {
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "actor_id",
            as: "actors",
            timestamps: false,
        });
    }
    return Movie;
}