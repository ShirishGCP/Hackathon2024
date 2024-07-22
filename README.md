Info:
Project is Integrated with 
  Spring Boot
  Open JDK 17
  Postman
  H2 Database

URL to get all user login : http://localhost:8090/archtechlogin/all
URL to get specific user login : http://localhost:8090/archtechlogin/shirish


Angular Setup
=======================================================================================================

Angular Project 

  ○ Go to D:\GCPLearning\codebase\javalocal\archtechui
  npm install -g @angular/cli@latest
  ○ ng new archtechuiangular --standalone=false
  ○ open the folder into vss 
  ○ On vss terminal do ng serve
  ○ Access UI via http://localhost:4200

  ○ Adding Bootstrap 
    ○ cd D:\GCPLearning\codebase\javalocal\archtechui\archtechuiangular\node_modules
    ○ npm install bootstrap --save
    ○ Check if bootstrap folder is created inside node_modules
    ○ Open angular.json & Under style array add first entry as

    "styles" : [ "node_modules/bootstrap/dist/css/bootstrap.min.css"
    
  
  ○ Install Materials
    ○ cd D:\GCPLearning\codebase\javalocal\archtechui\archtechuiangular\node_modules
    ○ npm install --save @angular/material @angular/animations
    ○ npm install --save @angular/material @angular/cdk

  ○ Consolidating all Materials module at one place 
    ○ Create file under app as app.material.module.ts
    ○ Copy all material modules inside it
    ○ Import app.material.module.ts inside project app.module.ts

  ○ Integrate Font Awesome Modules
    ○ cd D:\GCPLearning\codebase\javalocal\archtechui\archtechuiangular\node_modules
    ○ npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-free
    ○ npm install @fortawesome/free-regular-svg-icons
    ○ npm install @fortawesome/free-brands-svg-icons
    ○ npm install @fortawesome/free-solid-svg-icons
    ○ npm install simple-keyboard
    ○ Add path "node_modules/@fortawesome/fontawesome-free/css/all.css" into angular.json 
    Styles path
    
  ○ Consolidating all Font Awesome module at one place 
    ○ Create file under app as app.font-awesome.module.ts
    ○ Copy all material modules inside it
    ○ Import app.font-awesome.module.ts inside project app.module.ts
    

  ○ Clean up index.html & keep only 
  <app-root></app-root>
    
    
  ○ Add new Component
    ○ cd D:\GCPLearning\codebase\javalocal\archtechui\archtechuiangular\src\app
    ○ ng generate component login --module=app.module.ts
    ○ ng generate component header --module=app.module.ts
    ○ ng generate component footer --module=app.module.ts