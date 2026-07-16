const fs=require("fs");
const required=[
  "index.html","style.css","app.js","coach.js","content.js",
  "vocabulary.js","grammar.js","manifest.webmanifest","service-worker.js"
];
let failed=false;
for(const file of required){
  if(!fs.existsSync(file)){
    console.error("Fehlt:",file);
    failed=true;
  }
}
for(const file of ["app.js","coach.js","content.js","vocabulary.js","grammar.js","service-worker.js"]){
  try{
    new Function(fs.readFileSync(file,"utf8"));
    console.log("OK:",file);
  }catch(err){
    console.error("Syntaxfehler:",file,err.message);
    failed=true;
  }
}
process.exit(failed?1:0);
