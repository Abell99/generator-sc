Learning catalogue - CLI
TODO: 拉钩大前端，开发脚手架及封装自动化构建工作流，编程题第一题
- 自定义一个脚手架
    - 我的自定义脚手架主要用于自动生成我的听课笔记以及代码的目录结构

工作流程：
1.基于yeoman的脚手架，因此需要配置yeoman模块
    - yarn global add yo
    - npm install -g yo
2.搭配所需的generator的模块
    - 这里因为是要自己写脚手架，所以需要自己写生成器模  块
    2.1 自定义Generator
        > generator-<name>
        - 在Generator目录下初始化项目
            - yarn init -y
            - npm init -y
        - 安装生成器基类
            - yarn add yeoman-generator
            - npm install --save yeoman-generator
        - 创建目录结构
            - generators/app/index.js
                - 内容构成在代码中显示
            - generators/templates
                - 模板文件
            - 链接模块使之成为全局模块包
                - 链接方式
                    - yarn link
                - 使用方式
                    - yo lc
                        - 格式：yo 自定义生成器名称