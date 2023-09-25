/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "c6e7qah4kzw47m5",
    "created": "2023-09-03 14:32:33.799Z",
    "updated": "2023-09-03 14:32:33.799Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cpe9uesr",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eiwqnxsw",
        "name": "courses",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "8me3sb3ypcdpe9f",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c6e7qah4kzw47m5");

  return dao.deleteCollection(collection);
})
