@echo off 
echo srart the departments-fixed server 
start /b npm run dev 
time out /t 2 / nobreak >null 
start http://localhost:5174/
exit
