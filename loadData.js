const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");

const url = "mongodb connection url";
const dbName = "database name";
const collectionName = "employees"; // plural form of the model name
const dataFilePath = "./data.json";

const client = new MongoClient(url, { useNewUrlParser: true });

async function loadData() {
  try {
    await client.connect();
    console.log("Connected to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    const employees = jsonData.employees;

    if (Array.isArray(employees)) {
      const result = await collection.insertMany(employees);
      console.log(
        "Data loaded successfully:",
        result.insertedCount,
        "documents inserted"
      );
    } else {
      console.error("Data is not in the expected format.");
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    client.close();
    console.log("Connection closed");
  }
}

loadData();
