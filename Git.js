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















