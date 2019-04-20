//  Gamepad.States.preload = function(){
//      this.preload = function(){
//         game.load.image('background','assets/background.png');
//      }
//      this.create = function(){
//         var spacefield = game.add.tileSprite(0,0,1024,600,'background');
//      }
//  }
// var game = new Phaser.Game(1024,600,Phaser.AUTO,'phaser');
// game.States ={};
// game.States.preload = function(){
//     this.preload = function(){
//        game.load.image('background','assets/background.png');
//     }
//     this.create = function(){
//        game.add.tileSprite(0,0,1024,600,'background');
//     }
// };
// game.States.start('preload');
 
 
 
    var game = new Phaser.Game(
        1024,600,
        Phaser.AUTO,
        'phaser',{
            preload: preload,
            create: create,
            update: update
        }
        );
    
    var facing ='left';
    var hozMove = 70;
    var vertMove = 70;
    var goldman;

    function preload(){
        game.load.image('background','assets/background.png');
        game.load.spritesheet('man','assets/man2.png',240,240,8,0,2);
    }
    function create(){
        var spacefield = game.add.tileSprite(0,0,1024,600,'background');
        goldman = game.add.sprite(500,200,'man');
        goldman.scale.set(0.5);
        goldman.animations.add('walk');
        var move = goldman.animations.play('walk',5,true);
        goldman.anchor.setTo(.5,.5);
        move.enableUpdate = true;

        game.physics.enable(goldman);

        goldman.body.velocity.x = 0;
        
        // if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
        //     goldman.body.velocity.x = -hozMove;

        //     if(facing !=='left'){
        //         facing = 'left';
        //         goldman.scale.x *= -1;
        //     }
        // }else if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
        //     goldman.body.velocity.x = hozMove;

        //     if(facing !=='right'){
        //         facing = 'right';
        //         goldman.scale.x *= -1;
        //     }
        // }
        // game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    function update(){ 

        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            goldman.body.velocity.x = -hozMove;

            if(facing !=='left'){
                facing = 'left';
                goldman.scale.x *= -1;
            }
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            goldman.body.velocity.x = hozMove;

            if(facing !=='right'){
                facing = 'right';
                goldman.scale.x *= -1;
            }
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            goldman.body.velocity.y = -vertMove;

            // if(facing !=='left'){
            //     facing = 'left';
            //     goldman.scale.y *= -1;
            // }
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            goldman.body.velocity.y = vertMove;

            // if(facing !=='right'){
            //     facing = 'right';
            //     goldman.scale.y *= -1;
            // }
        }
        
    }

 