// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    bgMove: cc.Prefab = null;

    @property(cc.Prefab)
    bgBackMove: cc.Prefab = null;

    @property(cc.Prefab)
    grass: cc.Prefab = null;

    @property(cc.Prefab)
    object01: cc.Prefab = null; // saddle

    @property(cc.Prefab)
    object02: cc.Prefab = null; //horseshoe

    @property
    increment:number = 0;
    qtdSpeed:number = -300;

    @property
    positionBG:number = 940;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var manager = cc.director.getPhysicsManager();
        manager.enabled = true;
    }

    showBG() {
        var bg = cc.instantiate(this.bgMove);
        //bg.getComponent(cc.PhysicsBoxCollider).friction = 0;
        bg.setPosition(this.positionBG, -340);
        this.node.addChild(bg);
    }

    showBGRoad() {
        var bg = cc.instantiate(this.bgMove);
        //bg.getComponent(cc.PhysicsBoxCollider).friction = 0;
        bg.setPosition(this.positionBG, -390);
        this.node.addChild(bg);
    }

    showBGBack() {
        var bg = cc.instantiate(this.bgBackMove);
        //bg.getComponent(cc.PhysicsBoxCollider).friction = 0;
        bg.setPosition(this.positionBG, 0);
        this.node.addChild(bg);
    }

    showGrassAndStone() {
        var grass = cc.instantiate(this.grass);

        grass.setPosition(1800, -250.79);
        this.node.addChild(grass);
    }

    showObjects() {
        var itens = [this.object01,this.object02, this.object01];
        var randomItens = Math.floor(Math.random()*itens.length);
        var newItens = cc.instantiate(itens[randomItens]);

        //this.qtdSpeed += this.increment;
        //newItens.getComponent(cc.RigidBody).linearVelocity.x = this.qtdSpeed;

        newItens.setPosition(1500,115);
        this.node.addChild(newItens);
    }

    start() {

    }

    // update (dt) {}
}
