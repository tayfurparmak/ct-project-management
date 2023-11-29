```sh
ng new --no-standalone ct-project-management

code ct-project-management

ng g c components/home
ng g c components/about
ng g c components/project
ng g c components/contact
ng g c components/header
ng g c components/footer

npm i bootstrap

ng g s services/project

# Deploy
rm -rf dist
ng build --base-href=https://tayfurparmak.github.io/ct-project-management/
mv dist/ct-project-management/browser ./docs
rm -rf dist

```
