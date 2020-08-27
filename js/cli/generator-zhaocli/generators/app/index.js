var Generator = require('yeoman-generator');

// 编写自己的Yeman生成器
module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }
    method1() {
        this.log('method 1 just ran');
    }
    method2() {
        this.log('method 2 just ran');
    }
    async prompting() {
        const answers = await this.prompt([{
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            },
            {
                type: "confirm",
                name: "cool",
                //是否使用扩展功能
                message: "Would you like to enable the Cool feature?"
            },
            {
                type: 'list',
                name: 'installTool',
                message: "请选择你需要的包管理器",
                choices: ['npm', 'yarn']
            }
        ]);

        this.log("app name", answers.name);
        this.appname = answers.name;
        this.cool = answers.cool;
        this.installTool = answers.installTool;

        this.log("cool feature", answers.cool);
    }

    //写入函数
    writing() {
        this.fs.copyTpl(
            this.templatePath('./'),
            this.destinationPath('./'),
            //拷贝生成目录的名字
            {
                name: this.appname,
                cool: this.cool
            }
        );

        //判断是否使用扩展
        if (this.cool) {
            this.fs.extendJSON(
                this.destinationPath('package.json'), {
                    dependencies: {
                        lodash: '^4.17.15'
                    }
                }
            )
        }
    }

    //依赖安装
    install() {
        //判断使用哪个命令安装
        this.installTool === "yarn" ?
            this.yarnInstall() : this.npmInstall()

    }
};