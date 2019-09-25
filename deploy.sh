clear
git checkout master
git fetch -p
git pull
git checkout gh-pages
git merge origin/master
ng build --prod --base-href https://contactipraju.github.io/shopping-cart/
ngh --dir=dist/shopping-cart