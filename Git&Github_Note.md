
GIT AND GITHUB

1. Configure Git (First-Time_ Setup)
   git config --global user.name "Jewel"
   git config --global user.email "ajewel265@gmail.com"
   git config --list
   …………………………………………………………………………….
2. First time push to Github:

- git init
- git remote add origin <url>
- git add .
- git commit -m “First commit”
- git branch -M main
- git push -u origin main
  ……………………………………………………………………………..
  2.Update code: If any changes
- Git status
- Git add .
- Git commit -m “update”
- Git push
  ………………………………………………………………………..

3Create, Merge and Delete a Branch
—————————————————————————
3. Create a Branch
   -git branch
   -git branch feature/smoke-tests
   -git checkout feature/smoke-tests

   Or create and switch to the branch in one command:
   -git checkout -b feature/smoke-tests
………………………………………………………………………………………….
4. Add the Branch to GitHub ( works independently) # once add some code / scripts etc….. then 👇
   -git status
   -git add .
   -git commit -m “update smoke tests"
   -git push -u origin feature/smoke-tests
…………………………………………………………………………………………………
5. Merge the Branch into Main
   -git fetch
   -git branch -a
   -git checkout main
   -git pull origin main
   -git merge feature/smoke-tests
   -git push origin main
…………………………………………………………………………………………………
6.Delete the Branch from Git and GitHub
   (Delete the local branch)

   -git branch -d feature/smoke-tests
   -Delete the remote GitHub branch:
   -git push origin --delete feature/smoke-tests

………………………………………………………………………………………………….
