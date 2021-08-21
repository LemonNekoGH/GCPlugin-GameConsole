var GameConsolePluginSample = (function () {
    function GameConsolePluginSample() {
        EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, this.onEngineInit, this, null, true);
    }
    GameConsolePluginSample.prototype.onEngineInit = function () {
        GameUI.show(1);
    };
    return GameConsolePluginSample;
}());
var Game = new GameBase();
new GameConsolePluginSample();
//# sourceMappingURL=GameConsolePluginSample.js.map