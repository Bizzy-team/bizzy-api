module.exports = {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["author", "mood", "title", "description", "adress", "date", "participants"],
            properties: {
                author: {
                    bsonType: "object"
                },
                mood: {
                    bsonType: "string",
                    enum: ["food", "drink", "culture", "sport", "mind"]
                },
                title: {
                    bsonType: "string"
                },
                description: {
                    bsonType: "string"
                },
                adress: {
                    bsonType: "string"
                },
                date: {
                    bsonType: "date"
                },
                participants: {
                    bsonType: "array",
                    uniqueItems: true,
                    items: {
                        bsonType: "objectId"
                    }
                }
            }
        }
    }
};