/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8me3sb3ypcdpe9f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k6ect6yl",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "c6e7qah4kzw47m5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8me3sb3ypcdpe9f")

  // remove
  collection.schema.removeField("k6ect6yl")

  return dao.saveCollection(collection)
})
