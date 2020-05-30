//获取用户输入的行为
var playerAction = process.argv[process.argv.length - 1];
let count = 0;

const game = require('./lib.js')

// const result = game(playerAction)
// console.log(result)

//进程标准输入，事件
process.stdin.on('data', e=>{
    const playerAction = e.toString().trim()
    const result = game(playerAction)
    console.log(result)
    if(result == -1) {
        count++;
    }
    if(count === 3){
        console.log('你太厉害了，我不玩了')
        process.exit();  //杀进程
    }
})
