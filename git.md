* 建立文件，git init 创建版本库（git就可以管理所有的操作：修改、删除、添加等
     目录下新增.git文件，git通过此文件跟踪版本库
* 与远程库建立联接   
    git remote add origin  https://github.com/youyi2016/note.git
    （远程库的名字默认为origin）
* git push 将本地仓库中的文件更新到远程库    
* Git add ""
* Git commit -m ""
* Git diff 查看修改情况 
* Git log 查看所有提交历史 git log --pretty=oneline
* cat 文件名 查看当前文件内容
* git reset --hard Head^ 回退到上一个版本 Head^^回退到上上一个版本 Head~100回退到前100个版本
git reset --hard 版本id 回退到指定版本 id不需要写全
* git reflog 查看操作记录 历史命令 可以找到所有版本id
* git log --graph --pretty=oneline --abbrev-commit 查看合并情况
* git config --global alias.st status 配置别名
* cat .git/config  查看当前库配置文件，包含的信息：远程库的地址、所有分支等
* cat .gitconfig 当前用户下的配置文件，包含了所有别名信息，当前用户名和邮箱等信息
* git stash 保存工作现场 git会将工作现场保存在某一个地方 通过git stash list可以查看位置
  git stash pop 恢复现场并删除stash内容
* git merge --no-ff -m "merge with no-ff" dev 添加--no-ff会保存合并记录

* **每修改一个bug，新建分支，修改完成之后，提交，合并到master分支，然后再删除bug分支**
* **每新增一个功能，新建分支，完成之后，提交，合并分支，然后再删除分支.**
* git branch -D feature-vulcan 强制删除分支 -D

* **当前分支下内容没有提交，git是不允许切换分支的，提交内容或是先stash保存现场之后才能切换分支**
* git remote 查看当前远程库的名字 -v 查看远程库的详细地址

* **多人协助时，clone下来的项目，默认只会有一个master分支，如果需要在其他已经有的分支下工作需要**
* **创建远程的这个分支。git checkout -b dev origin/dev**

* 多人协作的工作模式：
* 首先，可以试图用git push origin branch-name推送自己的修改；
* 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；
* 如果合并有冲突，则解决冲突，并在本地提交；
* 没有冲突或者解决掉冲突后，再用git push origin branch-name推送就能成功！
* 如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，
* 用命令git branch --set-upstream branch-name origin/branch-name。

* 本地新建的分支如果不推送到远程，对其他人就是不可见的；
 
* git flow：
代码整合到develop发现有bug:
修复发布之后出现的bug:hotfix
多个人同时在修改一个文件:

关键：进行多人协作
