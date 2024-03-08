//Base de datos falsa, para probar conexion, despues sera el archivo de conexion a datos

const db = {
    'user':[
        {id:1,name:"Daniel"},
        {id:2,name:"Camilo"}
    ]
};

function list(table){
    return db[table];
}

function get(table, id){
    let collection = list(table);
    return collection.filter(item => item.id === id)[0] || null;
}

function upsert(table, data){
    db[collection].push(data);
}

function remove(table,id){
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}