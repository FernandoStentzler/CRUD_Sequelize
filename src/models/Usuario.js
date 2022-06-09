module.exports = (sequelize, DataType) => {
    // usuario = modelo = nome da tabela
    const Usuario = sequelize.define('Usuario', {
        //nomes das colunas Dentro da tabela e suas definições
        //coluna ID
        id_usuario:{
            type:DataType.INTEGER,
            primaryKey:true,
            auto_increment:true
        },
        // Coluna Nome
        nome: DataType.STRING,
        //Coluna Email
        email:{
            type:DataType.STRING,
            allowNull:true,
        },
        //Coluna Senha
        senha: DataType.STRING
    },{
        //Nome da tabela em si
        tableName:'usuario',
        timestamps:false
    })

    return Usuario
}