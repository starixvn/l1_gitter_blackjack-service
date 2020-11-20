export default {
    hostingPort: 0,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://10.99.99.51:8310",
        authUrl: "http://10.99.99.51:8313",
        client: {
            id: "game-server",
            secret: "gameserver@20luminet&",
        },
        useAuthenticate: true,
        placeBetTimeout: 4500,
        requestTimeout: 10000, // 10s
        enabledApiLogs: true,
    },
    mainServerApiSettings: {
        url: "http://10.99.99.51:8210/api",
        auth: {
            url: "http://10.99.99.51:8313",
            id: "game-services",
            secret: "gameservices@20luminet&",
        },
        requestTimeout: 10000,
        placeBetTimeout: 4500,
        useAuthenticate: true,
    },
    socketOptions: {
        pingInterval: 60 * 1000,
        pingTimeout: 60 * 1000,
        transports: ["websocket"],
        allowUpgrades: false,
    },
    enabledLogs: true,
    database: {
        url:
            "mongodb://lmn_backend:%21%23x97%25uYZv%2A%5E%25%3E%7C%2Aqg%40E7FHi%3F9l%7B9r%3CK@10.99.99.53:37101,10.99.99.54:37102/?replicaSet=L2_SabaMain",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "http://5e3ac415a1b0485eb78da0e7b0327225@10.99.99.187:803/118",
        logIdentifier: "blackjack",
        env: "PROD",
    },
    authenticateSettings: {
        audiences: ["api", "admin-api"],
    },
    adminSecretKey: "asWDEer4yGdgsdqR4uqmKQZgh",
    enableCorsWs: true,
    corsUrls: [
        "https://sabagame.net",
        "https://www.sabagame.net",
        "http://sabagame.net",
        "http://www.sabagame.net",
        "https://gamesaba.net",
        "https://www.gamesaba.net",
        "http://gamesaba.net",
        "http://www.gamesaba.net",
        "http://admg.sabagame.net",
        "https://admg.sabagame.net",
        "http://adm.sabagame.net",
        "https://adm.sabagame.net",
    ],
    roundMaxDuration: 24,
};
