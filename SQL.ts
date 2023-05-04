(async () => {
  const mysql=require('mysql2');
  const pool = mysql.createPool({host:'localhost',user:'tseko',database:'users'})
})
