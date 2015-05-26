# jsdb_jss
Various javascripts for jsdb
- for now:
sqlite helper object - ex:
```
db=new DB("path/to/db");
if(!db.exec("create table if not exists t1('key' varchar,'val' numeric)")){
  writeln(db.qry + " failed.");
  system.quit();
  }
if(!db.exec("insert into table t1 values('key1',1)"))
  system.quit();
if(db.exec("select * from table")){
  writeln(db.rows.length);
  writeln(db.rows[0].val);
  }
```
