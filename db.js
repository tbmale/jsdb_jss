function DB(fn){
this.path=(fn.length==0)?":memory:":fn;
this.db=new SQLite(fn);
this.qry="";
}

DB.prototype.exec=function(qrytext){
if(this.qry!=qrytext){
 this.resbuff=[];
 this.qry=qrytext;
 }
if(this.db.exec(this.qry,this.callback,this)){
 this.rows=this.resbuff;
 this.resbuff=[];
 }
}
DB.prototype.callback=function(rec,obj){
obj.resbuff.push(rec.toObject());
}

function test(){
db=new DB('base');
db.exec("create table if not exists t1('r1' varchar, 'r2' integer)");
writeln(db.rows.length);
db.exec("insert into t1 values('val1',1)");
writeln(db.rows.length);
db.exec("select * from t1");
writeln(db.rows.length+":"+db.rows[db.rows.length-1].r1);
db.exec("select * from t1");
writeln(db.rows.length+":"+db.rows[db.rows.length-1].r2);
}