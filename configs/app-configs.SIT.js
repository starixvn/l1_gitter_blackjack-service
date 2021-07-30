export default {
    hostingPort: 5000,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://l2_game_api_sit:5000",
        authUrl: "http://l2_auth_api_sit:5000",
        client: {
            id: "game-server",
            secret: "gameserver@20luminet&",
        },
        useAuthenticate: true,
        requestTimeout: 10000,
        placeBetTimeout: 4500,
        enabledApiLogs: true,
    },
    mainServerApiSettings: {
        url: "http://l2_game_server_sit:5000/api",
        auth: {
            url: "http://l2_auth_api_sit:5000",
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
        url: "mongodb://lmn_backend:LmnBackend%40517@10.99.99.187:37301/?replicaSet=SabaL2SIT",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    sentry: {
        sentryUrl: "http://ee5983aa298646d4ad021cf2c0c1a9eb@10.99.99.187:800/168",
        logIdentifier: "blackjack",
        env: "SIT",
    },
    authenticateSettings: {
        audiences: ["api", "admin-api"],
    },
    adminSecretKey: "asWDEerfOIdgsdqRTFabvmgh",
    enableCorsWs: true,
    corsUrls: [
        "http://sit.v-gaming.net",
        "https://sit.v-gaming.net",
        "https://sit-admg.v-gaming.net",
        "http://sitadm.v-gaming.net",
        "https://sitadm.v-gaming.net",
        "http://msit.v-gaming.net",
        "https://msit.v-gaming.net",
    ],
    roundMaxDuration: 1,
};
