function type()
{
    let name1="PRIYA NAYAK";
    let namearr=name1.split("");

    function looping()
    {
        if(namearr.length>0)
        {
            let n=namearr.shift();
            document.querySelector("#heading--main").innerHTML+=n;
        }   
        else
        {
            deleting();
            return false;
        }
        setTimeout(looping,500);
    }

    looping();
}


function deleting()
{
    nameDarr=document.querySelector("#heading--main").innerHTML.split("");
    if(nameDarr.length>0)
    {
        nameDarr.pop();
        document.querySelector("#heading--main").innerHTML=nameDarr.join("");
    }
    else
    {
        type();
        return false;
    }
    setTimeout(deleting,200)
}

type();

let dayN=document.querySelector("#day-night")
dayN.addEventListener("click",alter)
console.log(document.querySelector("#day-night"))
function alter()
{
    if(dayN.querySelector("i").classList.contains("fa-sun"))
    {
        dayN.innerHTML='<i class="fas fa-moon"></i>';
    }
    else
    {
        dayN.innerHTML='<i class="fas fa-sun"></i>';
    }
}


//console.log(document.documentElement.style.setProperty("--color-black-font","red"));
// root.style.setProperty('--font-size', '14px');


