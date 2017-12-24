# Ng4Thisthin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve --port 4500` for a dev server. 
Navigate to `http://localhost:4500/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Repo
Create a repository on GitHub (<your-username>/<your-repo>)
Create a db.json file
Visit https://my-json-server.typicode.com/<your-username>/<your-repo> to access your server

## Deployment
To Build for Prod: use this command at the terminal:
ng build --env=prod
Everything goes into the dist folder which is what you would FTP to your public html root folder.

If reloading pages, besides root, and deep linking after deployment gives you a 404/Not found error on an Apache server (like GoDaddy), upload file.htaccess to your site in the same folder as the the index.html, and then rename it:     .htaccess

You may get 404 errors unless you are using the HashLocation strategy. 
See https://angular.io/docs/ts/latest/guide/router.html#browser-url-styles for more information on HashLocation. 
The reason is that all Angular routes should be served via the index.html file.

This piece of code makes use of the mod_rewrite module from Apache

Once you rename the file, it will seem to disappear, since it becomes a system file, but adding this .htaccess file worked for me by renaming after ftp as described above.

Many thanks to Minko Gechev (http://blog.mgechev.com/) for helping me solve this issue and sharing it on github. Minko, you really rock!


