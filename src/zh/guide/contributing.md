# 贡献指南

我们**热烈欢迎**各位的贡献，并会给予充分的**认可**。在您提交贡献之前，这里有一些注意事项：

## 😄 贡献示例
- 作为 bug 报告的失败回归测试。
- 文档改进，例如修正拼写错误、添加章节。
- 为现有扩展添加新功能，例如新增可配置选项。
- 对核心部分进行解释清晰且不会造成破坏的更改。

## 🛠️ 搭建开发环境

### 前提条件
您需要先安装以下工具：
- Git
- Node
- pnpm
- git-cz

```shell
# 安装 pnpm
sudo npm install -g pnpm

# 安装 git-cz
sudo npm install -g git-cz
```

### 复刻并克隆仓库到本地
```shell
git clone git@github.com:yourname/yiitap.git
```

### 安装依赖
```shell
cd yiitap
pnpm install
```

### 运行开发环境
首先构建所有包：
```shell
pnpm build
```

默认运行 Vue 应用：
```shell
pnpm dev
```
在您喜欢的浏览器中打开 http://localhost:5173/yiitap

## 🧑🏻‍💻 开发与提交
### 创建新特性分支
```shell
git checkout -b feat/new-feature
```

### 代码修改
针对新特性进行具体的代码修改。

### 代码检查、测试和构建
#### 代码检查
```shell
pnpm lint
```
确保没有代码检查问题，若有问题可使用以下命令修复：
```shell
pnpm lint-fix
```

#### 测试
```shell
pnpm test-ci
```

#### 构建
```shell
pnpm build
```

### 预览
```shell
cd apps/vue
pnpm preview
```
您可以访问 http://localhost:4173/yiitap 检查您的更改是否符合预期。

### 生成变更集
```shell
pnpm changeset
```

### 提交代码
现在可以安全地提交代码了。
```shell
git add .
git cz
```

## 🚀 发起拉取请求
### 推送分支
```shell
git push origin feat/new-feature
```

### 创建拉取请求
我们建议使用模板创建拉取请求：
```shell
gh pr create --title "feat: new feature" --body-file .github/pull_request_template.md
```
或者在 GitHub 上创建 [拉取请求](https://github.com/yiitap/yiitap/pulls)。

## 📃 文档
文档和代码同样重要。请在代码进行任何更改时，同步更新相应的文档仓库。

- [代码仓库](https://github.com/yiitap/yiitap)：在此修改代码。
- [文档仓库](https://github.com/yiitap/docs)：在此更新或添加文档，以反映在 Yiitap 仓库中所做的更改。 