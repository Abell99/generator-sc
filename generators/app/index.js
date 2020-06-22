/* 
    - 注意事项:
        - 此文件是Generator的核心入口
        - Yeoman Generator在工作的时候会自动调用我们在此类型中定义的一些生命周期方法
            - eg: prompting () 、 writing ()
        - 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能
            - eg: this.prompt() 、 this.fs.write() 、 this.fs.copyTpl()
*/

// 导入模块，从而返回子类，形成一个标准的generator模块
const Generator = require('yeoman-generator')
// 返回子类
module.exports = class extends Generator {  // 规定需要导出一个继承自Yeoman Generator 的类型
    // generator中高度封装的fs方法集,功能更加强大
    /*
        TODO: prompting () ------------------------------------
        Yeoman会在询问用户环节自动调用此方法
        作用:
            - 询问用户，获取字段值
    */
    prompting () {
        /* 
            ---- TODO: fs.prompt() 方法对用户发起命令行询问---------
            注意:这是一个 promise
        */
        return this.prompt([
            // 每一个数组对象就是一个问题的设置
            {
                type: 'input', // 类型
                name: 'title', // 询问结果对应的字段
                message: 'The name of the section', // 问题的询问语句
                default: this.appname + ' ↓ ' // 默认值，this.appname 指向当前目录的名称
            }
        ])
        // 对结果的处理
        .then(answers => {
            // 询问的结果，会以键值对的形式返回
                // eg: answers => { title: 'users input' }
            // 将询问的结果挂载到this对象上面，方便在写入文件阶段(writing)使用
            this.answers = answers
        })
    }
    /* 
        TODO: writing () ---------------------------------------
        Yeoman会自动在文件阶段调用此方法
        作用:
            - 写入文件
    */
    writing () {
        /* 
            ---- TODO: fs.write () 写文件方法的使用---------------------
            注意：不能和fs.copyTpl同时使用
        */
        /* this.fs.write(
            // 第一个参数，生成文件的目标地址
            this.destinationPath('temp.txt'),
            // 第二个参数，生成的文件的内容
            Math.random().toString()
        ), */
        /*
            ---- TODO: fs.copyTpl () 根据模板文件生成文件----------------
        */
        // 获取第一个参数: 模板文件路径
        const tmpl = ['title/code/explain.txt', 'title/notes/title.md']
        // 获取第二个参数: 输出目标的路径, 可以更改生成目标的文件名称
        const output = [`${this.answers.title}/code/explain.txt`, `${this.answers.title}/notes/title.md`]
        // 第三个参数: 编辑模板数据上下文
        const context = { title: this.answers.title }
        // 通过模板方式写入文件到目标目录
        tmpl.forEach((item, index) => {
            this.fs.copyTpl(
                this.templatePath(item), 
                this.destinationPath(output[index]),
                context
            )
        })
    }
}