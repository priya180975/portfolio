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


//skills fill effect 
console.log(document.querySelectorAll(".skill-line div"))

const square = document.querySelectorAll('.skill-line div');
// square.forEach(a=>a.classList.remove('animaaation'));

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        console.log(entry.target)
      entry.target.classList.add('animaaation');
      return;
    }

    entry.target.classList.remove('animaaation');
  });
});

square.forEach(a=>observer.observe(a))




//light dark theme 
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




