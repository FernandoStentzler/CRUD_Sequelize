module.exports = (sequelize, DataType) => {    
    
    const Artista = sequelize.define('Artista', {

        id: {
            type:DataType.INTEGER,
            primaryKey:true,
            auto_increment:true
        },        
        nome:{
            type: DataType.STRING,
            allowNull:false,
        },
                        
    },{        
        tableName:'artistas',
        timestamps:false
    })

    Artista.associate = (models)=>{
        Artista.hasMany(models.Album, {
            foreignKey: 'id_artista',
            as: 'albuns'
        })
    }
    
    
    
    return Artista
}