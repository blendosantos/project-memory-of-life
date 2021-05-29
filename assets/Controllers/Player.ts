// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property
    jump:number = 0;
    maxMoveSpeed = 0;
    accel: 0;

    @property(cc.AudioClip)
    jumpSound:cc.AudioClip = null;

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.makePlayerJump,this);
        this.node.on('touchstart',this.addForce,this);
    }

    makePlayerJump(event){        
        switch(event.keyCode){
            case cc.macro.KEY.space:
                this.addForce();
                
                break;
        }

        // Ao clicar na personagem chama a função addForce
        this.node.on('touchstart', function (){
            this.addForce();
        }, this);
    }

    addForce(){
        if(this.jump == 0){
            cc.audioEngine.playEffect(this.jumpSound,false);
            this.jump = 1;
        }
    }

    onBeginContact(contact,selfCollider,otherCollider){
        if(otherCollider.name == 'space<PhysicsBoxCollider>'){
            this.jump = 0;
            console.log('Chão'); 
        }
        if(otherCollider.name == 'sela<PhysicsPolygonCollider>'){
            console.log('Sela'); 
        }else if(otherCollider.name == 'ferradura<PhysicsPolygonCollider>'){
            console.log('Ferradura');          
        }
    }

    start () {

    }

    // update (dt) {}
}
