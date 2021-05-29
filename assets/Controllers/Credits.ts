// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Menu extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    changeScene(event){
        switch(event.keyCode){
            case cc.macro.KEY.enter:
                    cc.director.loadScene('Start');
                    break;
        }
    }
    mouseOrTouchChangeScene(event){
        cc.director.loadScene('Start');
    }
     onLoad () {
        cc.director.preloadScene('Start');
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.changeScene,this);
        this.node.on('touchstart',this.mouseOrTouchChangeScene,this);
     }
 
    start () {
 
    }

    // update (dt) {}
}
