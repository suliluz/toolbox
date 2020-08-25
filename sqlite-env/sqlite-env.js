const Database = require("better-sqlite3");

var SQLite = {
    instance() {
        return Database("_data.db", {verbose: console.log});
    },
    getEnvironmentVariable(key) {
        let db = this.instance();
        let data = db.prepare('SELECT * FROM environment_vars WHERE key = ?').get(key);
        db.close();
        return data;
    },
    setEnvironmentVariable(key, value) {
        let db = this.instance();
        let stmt = db.prepare('INSERT INTO environment_vars (key, value) VALUES (?,?)');
        let env = stmt.run(key, value);
        db.close();
        return env;
    },
    getLogByReferenceNumber(reference_number) {
        let db = this.instance();
        let data = db.prepare('SELECT * FROM logs WHERE reference_number = ?').get(reference_number);
        db.close();
        return data;
    },
    getLogsByType(type) {
        let db = this.instance();
        let data = db.prepare('SELECT * FROM logs WHERE type = ?').all(type);
        db.close();
        return data;
    },
    setLog(reference_number, type, log, createdAt) {
        let db = this.instance();
        let stmt = db.prepare('INSERT INTO logs (reference_number, type, log, createdAt) VALUES (?,?,?,?)');
        let logging = stmt.run(reference_number, type, log, createdAt);
        db.close();
        return logging;
    },
    getAllEnvironmentVariables() {
        let db = this.instance();
        let data = db.prepare('SELECT * FROM environment_vars').all();
        db.close();
        return data;
    },
    getAllLogs() {
        let db = this.instance();
        let data = db.prepare('SELECT * FROM logs').all();
        db.close();
        return data;
    },
    removeEnvironmentVariable(key) {
        let db = this.instance();
        let stmt = db.prepare('DELETE FROM environment_vars WHERE key = ?');
        let result = stmt.run(key);
        db.close();
        return result;
    },
    removeLogByReferenceNumber(reference_number) {
        let db = this.instance();
        let stmt = db.prepare('DELETE FROM logs WHERE reference_number = ?');
        let result = stmt.run(reference_number);
        db.close();
        return result;
    },
    removeLogsByType(reference_number) {
        let db = this.instance();
        let stmt = db.prepare('DELETE FROM logs WHERE type = ?');
        let result = stmt.run(reference_number);
        db.close();
        return result;
    },
    updateEnvironmentVariable(key, value) {
        let db = this.instance();
        let stmt = db.prepare('UPDATE environment_vars SET value = ? WHERE key = ?');
        let result = stmt.run(key, value);
        db.close();
        return result;
    }
}

console.log(SQLite.getAllEnvironmentVariables());