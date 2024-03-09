import { nanoid } from "nanoid"; 

const TABLE = "user";

export default function (injectedStore) {
  let store = injectedStore;
  console.log(store);
  if (!store) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  function upsert(body) {
    const user = {
      name: body.name,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = nanoid();
    }

    return store.upsert(TABLA, user);
  }
  return {
    list,
    get,
  };
}
