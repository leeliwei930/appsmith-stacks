console.log("Create User ######")


db = db.getSiblingDB("admin");

db.createUser({
	user: process.env.MONGO_INIT_DB_USERNAME,
	pwd: process.env.MONGO_INIT_DB_PASSWORD,
	roles: [
		{ role: "readWrite", db: process.env.MONGO_INITDB_DATABASE },
		{ role: "clusterMonitor", db: "admin" },
	],
}, { w: 'majority', wtimeout: 5000 });
