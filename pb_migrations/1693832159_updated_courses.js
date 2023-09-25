/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8me3sb3ypcdpe9f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "usncxp6v",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8me3sb3ypcdpe9f")

  // remove
  collection.schema.removeField("usncxp6v")

  return dao.saveCollection(collection)
})
