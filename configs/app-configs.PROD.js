export default {
    hostingPort: 5000,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://10.2.189.51:7310",
        authUrl: "http://10.2.189.51:7313",
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
        url: "http://10.2.189.51:7778/uat/main/api",
        auth: {
            url: "http://10.2.189.51:7313",
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
        url: "mongodb://lmn_backend:LmnBackend%4022027@10.99.99.187:37201/?replicaSet=SabaL2UAT",
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
    adminSecretKey: "asWDEerfOIdgsdqRTFabvmgh",
    enableCorsWs: true,
    corsUrls: [
        "https://uat.sabagame.net",
        "http://uat.sabagame.net",
        "http://uat-admg.sabagame.net",
        "https://uat-admg.sabagame.net",
        "http://uat-adm.sabagame.net",
        "https://uat-adm.sabagame.net",
    ],
    roundMaxDuration: 24,
};
