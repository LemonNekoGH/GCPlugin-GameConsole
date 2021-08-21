/**
 * 插件示例工程入口
 */
class GameConsolePluginSample {
    constructor() {
        // 监听引擎初始化
        EventUtils.addEventListenerFunction(ClientWorld, ClientWorld.EVENT_INITED, this.onEngineInit, this, null, true)
    }

    // 当引擎初始化完毕时调用的函数
    onEngineInit() {
        // 显示 1 号界面
        GameUI.show(1)
    }
}

// 新建游戏实例供 gamecreator.js 使用
const Game = new GameBase()
// 新建自己的入口
new GameConsolePluginSample()