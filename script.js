const questions = {
OS: [
{q:"Process is:",o:["Program in execution","Program in memory","Program in disk","None"],a:0},
{q:"Deadlock condition NOT required:",o:["Mutual Exclusion","Hold and Wait","Preemption","Circular Wait"],a:2},
{q:"LRU stands for:",o:["Least Recently Used","Last Recently Used","Least Random Used","None"],a:0},
{q:"Fork() returns:",o:["0 to child","pid to parent","-1 on error","All"],a:3},
{q:"Thrashing is:",o:["High paging activity","Low CPU use","Both","None"],a:2}
],
DBMS: [
{q:"ACID stands for?",o:["Atomicity...","...","...","..."],a:0},
{q:"Primary key can't be:",o:["Null","Duplicate","Both","None"],a:2},
{q:"SQL is:",o:["Declarative","Procedural","Both","None"],a:0},
{q:"Normalization removes:",o:["Redundancy","Anomaly","Both","None"],a:2},
{q:"DBMS manages:",o:["Data","Data & Access","Only Query","None"],a:1}
],
CN: [
{q:"OSI layers:",o:["7","5","4","9"],a:0},
{q:"TCP is:",o:["Connectionless","Connection oriented","Both","None"],a:1},
{q:"IP address size IPv4:",o:["32 bit","64 bit","128 bit","16 bit"],a:0},
{q:"HTTP port:",o:["80","443","21","25"],a:0},
{q:"DNS is:",o:["Converts name to IP","IP to name","Both","None"],a:0}
]
};
let currentSubject, currentQ=0, score=0, timer;
function startQuiz(sub){
currentSubject=sub;
document.getElementById('subject-box').classList.add('hide');
document.getElementById('quiz-box').classList.remove('hide');
showQ();
startTimer();
}
function showQ(){
let q = questions[currentSubject][currentQ];
document.getElementById('q-count').innerText=`${currentQ+1}/5`;
document.getElementById('question').innerText=q.q;
document.getElementById('options').innerHTML=q.o.map((opt,i)=>`<button onclick="check(${i})">${opt}</button>`).join('');
}
function check(i){
if(i==questions[currentSubject][currentQ].a) score++;
nextQ();
}
function nextQ(){
currentQ++;
if(currentQ<5){showQ();}else{showResult();}
}
function showResult(){
clearInterval(timer);
document.getElementById('quiz-box').classList.add('hide');
document.getElementById('result-box').classList.remove('hide');
document.getElementById('score').innerText=score;
}
function startTimer(){
let time=30;
timer=setInterval(()=>{
time--;
document.getElementById('timer').innerText=time+'s';
if(time<=0){nextQ(); time=30;}
},1000);
}