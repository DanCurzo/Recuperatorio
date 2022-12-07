module.exports = function(sequelize, DataTypes){
    let alias = "Genre";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name:{
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
        ranking:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        active:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    };
    let config = {
        timestamps: false,
        tableNames: 'genre'
    };
    const genre = sequelize.define(alias, cols, config);

    // Un genero tiene muchas peliculas
    genre.associate = function(models){
        genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: 'genre_id'
        });
    }
    
    return genre;
}