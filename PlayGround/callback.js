const getdata=(callback)=>{
    setTimeout(() => {
        console.log("get data");
        callback();
    }, 3000);
}

const showdata=()=>{
    console.log("show data");
}
getdata(()=>{
    showdata();
});
