module.exports = {
  "kind": "collectionType",
  "collectionName": "all_blogs",
  "info": {
    "singularName": "all-blog",
    "pluralName": "all-blogs",
    "displayName": "all Blogs",
    "description": ""
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "coverImg": {
      "type": "media",
      "multiple": true,
      "required": false,
      "allowedTypes": [
        "images",
        "files",
        "videos",
        "audios"
      ]
    },
    "authorName": {
      "type": "string"
    },
    "tags": {
      "type": "component",
      "repeatable": true,
      "component": "tag-value.tags"
    },
    "blogContent": {
      "type": "richtext"
    },
    "slug": {
      "type": "string",
      "unique": true
    },
    "breadcrumb": {
      "type": "string"
    }
  }
};