const btn=document.getElementById('btn');
btn.addEventListener('click',weather);

async function weather(){
    const search=document.getElementById('searchcity').value;
    const city=document.getElementById('city')
    const temp=document.getElementById('temp')
    const desc=document.getElementById('desc')
    const fl=document.getElementById('fl')
    const ws=document.getElementById('ws')
    const humidity=document.getElementById('humidity')
    const vs=document.getElementById('vs')
    const deg=document.getElementById('deg')
    const factor=document.getElementById('factor')
    const url='https://api.openweathermap.org/data/2.5/weather?q='
    const api='4170a4c43a12394fd58f981ca8e0107c&units=metric';
    const data=await fetch(url+search+ `&appid=${api}`);
    if(data.status==404){
        alert("Invalid city name");
        factor.style.display='none';
        document.getElementById('header').style.display='none';
    }
    else{
        const res=await data.json()
        if(search===''){
            alert("Please enter a city name.")
        }
        else{
            factor.style.display='flex';
            city.innerHTML=search;
            temp.innerHTML=(res.main.temp) + "°C";
            desc.innerHTML=res.weather[0].main+' , '+res.weather[0].description;
            fl.innerHTML=res.main.feels_like;
            ap.innerHTML=res.main.pressure+ " mb";
            ws.innerHTML=res.wind.speed + " Km/h";
            humidity.innerHTML=res.main.humidity+ "%";
            vs.innerHTML=((res.visibility)/1000) + ' km';
            deg.innerHTML=res.wind.deg;
        }
    }
}