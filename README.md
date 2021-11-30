# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## adding bootstrap
Bootstrap is used
please follow the steps properly to install boostrap and icons


1. npm install --save bootstrap
2. npm i bootstrap-icons --save

3.  add in angular.json
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/ngx-toastr/toastr.css",
            "src/styles.css"

4.  add in  styles.css
              @import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
              @import "~bootstrap-icons/font/bootstrap-icons.css";

# adding ngx toaster
npm install ngx-toastr --save@9.1.1
 npm install @angular/animations --save

 # styles.css
 @import '~ngx-toastr/toastr';

