module.exports = (sequelize, DataType) => {
    // usuario = modelo = nome da tabela
    const Produto = sequelize.define('Produto', {
        //nomes das colunas Dentro da tabela e suas definições
        
        id_produto:{
            type:DataType.INTEGER,
            primaryKey:true,
            auto_increment:true
        },
        
        preco:{
            type:DataType.INTEGER,
            allowNull:false
        },
        
        descricao:{
            type:DataType.STRING,
            allowNull:false,
        },    
    },
    {
        //Nome da tabela em si
        tableName:'produto',
        timestamps:false
    })

    Produto.associate = (models) => {
        Produto.belongsToMany(models.Pedido, {
            foreignKey: 'fk_pedido',
            as: 'pedidos',
            through: models.ItemPedido
        })
    }

    return Produto
}