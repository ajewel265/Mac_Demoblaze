
Git & GitHub – After Making Changes
Whenever any changes happen to the project, these steps need to be followed terminal:

1. Check status- git status
2. Add all changes- git add .
3. Commit changes- git commit -m “messages”
4. Push to GitHub- git push

Remember: Repeat these steps every time you make new changes to your project to keep GitHub up to date!

Git & GitHub – Create, Merge and Delete a Branch

1. Create a Branch
   -git branch
   -git branch feature/smoke-tests
   -git checkout feature/smoke-tests
   Or create and switch to the branch in one command:
   -git checkout -b feature/smoke-tests
2. Add the Branch to GitHub ( works independently) # add some code / scripts etc….. then 👇
   -git status
   -git add .
   -git commit -m "Added smoke tests"
   -git push -u origin feature/smoke-tests
3. Merge the Branch into Main
   -git fetch
   -git branch -a
   -git checkout main
   -git pull origin main
   -git merge feature/smoke-tests
   -git push origin main
4. Delete the Branch from Git and GitHub
   Delete the local branch:
   -git branch -d feature/smoke-tests
   -Delete the remote GitHub branch:
   -git push origin --delete feature/smoke-tests

**With explanation:**

Git & GitHub – Create, Merge and Delete a Branch

1. Create a Branch
   git branch
   git branch feature/smoke-tests
   git checkout feature/smoke-tests
   Or create and switch to a new branch in one command:
   git checkout -b feature/smoke-tests

* git branch – Lists existing branches.
* git checkout – Switches to another branch.

2. Push the New Branch to GitHub
   After making changes to your code, run:
   git status
   git add .
   git commit -m "Added smoke tests"
   git push -u origin feature/smoke-tests

* git status – Checks your changes.
* git add . – Stages all changed files.
* git commit – Saves your changes.
* git push – Uploads your branch to GitHub.

3. Merge the Branch into Main
   git fetch
   git branch -a
   git checkout main
   git pull origin main
   git merge feature/smoke-tests
   git push origin main

* git fetch – Gets the latest remote updates.
* git branch -a – Lists local and remote branches.
* git checkout main – Switches to the main branch.
* git pull origin main – Updates your local main branch.
* git merge feature/smoke-tests – Merges your feature branch into main.
* git push origin main – Uploads the merged changes to GitHub.

4. Delete the Branch from Git and GitHub
   Delete the local branch:
   git branch -d feature/smoke-tests
   Delete the remote branch from GitHub:
   git push origin --delete feature/smoke-tests

* git branch -d – Deletes the local branch.
* git push origin --delete – Deletes the branch from GitHub.
  Note: Make sure the branch has been merged before deleting it.
