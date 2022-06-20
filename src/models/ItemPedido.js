module.exports = (sequelize, DataType) => {
    // usuario = modelo = nome da tabela
    const ItemPedido = sequelize.define('ItemPedido', {
        //nomes das colunas Dentro da tabela e suas definições
        
        id_item_pedido:{
            type:DataType.INTEGER,
            primaryKey:true,
            auto_increment:true
        },
        
        fk_pedido:{
            type:DataType.INTEGER            
        },
        
        fk_produto:{
            type:DataType.INTEGER          
        }    
    },{
        //Nome da tabela em si
        tableName:'item_pedido',
        timestamps:false
    })   

    return ItemPedido
}