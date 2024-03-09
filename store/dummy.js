//Base de datos falsa, para probar conexion, despues sera el archivo de conexion a datos

const db = {
  user: [
    { id: "1", name: "Daniel" },
    { id: "2", name: "Camilo" },
  ],
};

async function list(table) {
  //siendo asincrona me esta devolviendo tambien una promesa
  return db[table];
}

async function get(table, id) {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
}

async function upsert(table, data) {
  db[collection].push(data);
}

async function remove(table, id) {
  return true;
}

console.log(get);
export default {list,get,upsert,remove};