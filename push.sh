sweep
git status
echo "是否继续commit，继续输入1，放弃输入0 ?"
read number
if [[ number -eq 0 ]];then
	exit
fi
git add .
git commit -am "normal notes"
git pull
git push