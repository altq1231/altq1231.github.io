# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:AltQ1231/altq1231.github.io.git master

cd -
rm -rf dist
