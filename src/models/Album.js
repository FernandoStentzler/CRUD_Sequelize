module.exports = (sequelize, DataType) => {    
    
    const Album = sequelize.define('Album', {

        id: {
            type:DataType.INTEGER,
            primaryKey:true,
            auto_increment:true
        },        
        titulo:{
            type: DataType.STRING,
            allowNull:false,
        },
        id_artista:{
            type: DataType.INTEGER,
            allowNull:false,
        },
                
    },{        
        tableName:'albuns',
        timestamps:false
    })

    Album.associate = (models)=>{
        Album.belongsTo(models.Artista, {
            foreignKey: 'id',
            as: 'artista'
        })
    }

    return Album
}