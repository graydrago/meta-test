class Config {
    constructor() {
        if (Config._instance !== undefined) {
            throw new Error("[Config] Config instance should be created only once.");
        }

        this._config = {}
    }

    app() {
        if (Config._instance === undefined) {
            Config._instance = new Config();
        }

        return Config._instance;
    }

    add(name, config) {
        this._config[name] = config;
    }

    get(name) {
        return this._config[name];
    }
}


