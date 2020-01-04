// 於2020/01/04補充
/*

git checkout master
切換到master分支

git checkout -b <bran-name>
當實作完一個網站，但需要新增一個新功能時，可以透過以上git checkout取出當前分支
透過-b 註明我新取出的branch name。
換句話說，"git checkout -b searchBar"的意思就是
使用git command取出當前分支，並新建(-b)一個branch名稱為searchBar。


git push --set-upstream origin searchBar
若是在本地端進行這件checkout的，那遠端可能還不存在一個叫做searchBar的branch
這時候(或許)可以透過--set-upstream設定遠端的上游。
git push --set-upstream origin searchBar
意思是push此分支，將此分支上游設為searchBar，並作為push上去的目的地。

git push -u origin searchBar
意思是push此分支，將此分支上游設為searchBar，並作為push上去的目的地。(可能是上游已存在searchBar此分支)

what is a pull request?
GitHub會自動幫你建立一個pull request，我們可以在pull request裡敘述我們在某特定branch裡所做出的一些更動。


git branch with the star sign
確認自己目前在哪一個branch
使用git branch會印出local端所有的branch
branch with a star sign就是你目前處在的branch

git branch -d <branch name>
在本地刪除<branch name>分支

git merge(merging a pull request)
一旦完成feature開發，我們可以把checkout的branch merged回去，並刪除checkout的branch。

what is a fast-forward merge?
"A fast-forward merge can occur when there is a linear path from the current branch tip to the target branch."
for more info, see:https://www.atlassian.com/git/tutorials/using-branches/git-merge
*/


/* 
Git Commands

➜  ~ pwd
列印出目前所在資料夾
➜  ~ cd Documents
change directory to Documents
➜  Documents ls
列出在Documents裡的資料夾
GitHub
➜  Documents cd Git
cd: no such file or directory: Git
➜  Documents cd GitHub
➜  GitHub ls
Daily-Practice dictionary     gryffindor
//今天最重要的知識點：若要將一個資料夾變成repository(remote)，則需要先身處那個資料夾，
再針對那做git init
➜  GitHub cd dictionary
➜  dictionary echo "# dictionary" >> README.md
在dictionary這資料夾內，將"# dictionary"寫進README.md裡
➜  dictionary git init
將一個本地的資料夾dictionary初始化成git repo
Initialized empty Git repository in /Users/User's name/Documents/GitHub/dictionary/.git/

///又或者我們可以直接打開terminal，透過以下指令clone一個專案下來練習
ssh://git@github.com/[username]/[repository-name].git

➜  dictionary git:(master) ✗
這樣代表此時我們就身處git master了
➜  dictionary git:(master) ✗ git add README.md
添加ERADME.md檔案到我們的暫存區(staging area)記得龍哥的「將貨物放在倉庫前的廣場以利收集」的比喻嗎？


//如果想要一次將所有變動的檔案添加到staging area，則需使用以下指令
git add -A

➜  dictionary git:(master) ✗ git commit -m "first commit"
進行commit，一定要註明commit訊息
[master (root-commit) 1bc31f2] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
➜  dictionary git:(master) ✗ git remote add origin https://github.com/pdji1602003/dictionary.git
➜  dictionary git:(master) ✗ git push -u origin master
Counting objects: 3, done.
Writing objects: 100% (3/3), 220 bytes | 110.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/pdji1602003/dictionary.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
➜  dictionary git:(master) ✗ git diff
➜  dictionary git:(master) ✗ git add img
➜  dictionary git:(master) ✗ git push -u origin master
Branch 'master' set up to track remote branch 'master' from 'origin'.
Everything up-to-date
➜  dictionary git:(master) ✗
更詳細的git commands，請參訪：https://github.com/joshnh/Git-Commands
*/















