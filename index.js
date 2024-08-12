function update(){
    const x= new Date();
    const hours=x.getHours();
    let y= hours>=0? hours: hours;
    let z= hours>=0? 'AM' : 'PM';
    y=y.toString().padStart(2,0);
    const minutes=x.getMinutes().toString().padStart(2,0);
    const seconds=x.getSeconds().toString().padStart(2,0);
    const str=`${y}:${minutes}:${seconds} ${z}`;
    document.getElementById("time").textContent=str;
}
update()
setInterval(update,1000)
