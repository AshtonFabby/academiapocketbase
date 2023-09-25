/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8me3sb3ypcdpe9f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nogaqcng",
    "name": "teacher",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2qtk51xwvet437n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twpwqjjy",
    "name": "course_outline",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8me3sb3ypcdpe9f")

  // remove
  collection.schema.removeField("nogaqcng")

  // remove
  collection.schema.removeField("twpwqjjy")

  return dao.saveCollection(collection)
})
