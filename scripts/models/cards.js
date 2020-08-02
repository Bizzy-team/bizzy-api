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
                    bsonType: "string"
                }
            }
        }
    }
};