export default (appModule) => {
    appModule.config(($compileProvider, $httpProvider) => {
        $compileProvider.debugInfoEnabled(false);
        $httpProvider.useApplyAsync(true);
        console.log("Production mode enabled");
    });
};