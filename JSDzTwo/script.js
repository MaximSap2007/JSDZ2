const One = () => 
{ 
    alert("Task 1 executed");
    
    let a = prompt("Введіть число a:");
    let b = prompt("Введіть число b:");
    if( a < b)
    {
        a= -1;
        document.getElementById("res").innerHTML = "Висновок: a < b = A = " + a;
    }
    else
    {
        b = 1;
        document.getElementById("res").innerHTML = "Висновок: a > b = B = " + b;
    }
}
const Two = () =>
{
    alert("Task 2 executed");
    let a = prompt("Введіть число:");
    let f= 1;
    for(let i = 1; i <= a; i++)
    {
        f *= i;
        
    }
    document.getElementById("res").innerHTML = "Висновок: Факторіал числа " + a + " = " + f;
}
const Three = () => 
    {
        alert("Task 3 executed");
        let a = prompt("Введіть 1 число:");
        a = String(a);
        let b = prompt("Введіть 2 число:");
        b = String(b);
        let c = prompt("Введіть 3 число:");
        c = String(c);
        let d = a + b + c;
        document.getElementById("res").innerHTML = "Висновок: Конкатенація чисел " + a + ", " + b + ", " + c + " = " + d;
     

    }
const Four = () => 
{
    alert("Task 4 executed");
    let a = prompt("Введіть 1 число:");
    a = Number(a);
    let b = prompt("Введіть 2 число:");
    b = Number(b);
    if( a > 0 && b > 0)
        {
            document.getElementById("res").innerHTML = "Висновок: S роямокутника = a * b = " + a*b;
        }
    if(!a)
        {
            document.getElementById("res").innerHTML = "Висновок: S квадрата = b * b = " + b*b;
        }
    if(!b)
        {
            document.getElementById("res").innerHTML = "Висновок: S квадрата = a * a = " + a*a;
        }
}
function Five()
{
    alert("Task 5 executed");
    let a = prompt("Введіть число:");
    let sum = 0;
    for(let i = 1; i < a; i++)
    {
        if(a % i == 0)
            {
                sum +=i;
            }
    }
    if(sum == a)
        {
            document.getElementById("res").innerHTML = "Висновок: сума" + sum +" досконалого дільника ДОРІВНЮЄ числу"+ " " + a;
        }
    else
        {
            document.getElementById("res").innerHTML = "Висновок: сума" + sum +" досконалого дільника НЕ ДОРІВНЮЄ числу" + " " + a;
        }
}
function Six()
{
    alert("Task 6 executed");
    let a = prompt("Введіть мінімальне число:");
    let b = prompt("Введіть максимальне число:");
    let sum = 0;
    for(let i = 1; i < b; i++)
    {
        if(b % i == 0 > a && a % i == 0 < b)
            {
                sum +=i;
            }
    }
    if(sum == a)
        {
            document.getElementById("res").innerHTML = "Висновок: сума" + sum +" досконалого дільника ДОРІВНЮЄ числу"+ " " + a;
        }
    else
        {
            document.getElementById("res").innerHTML = "Висновок: сума" + sum +" досконалого дільника НЕ ДОРІВНЮЄ числу" + " " + a;
        }
}
const Seven = () => 
{
    alert("Task 7 executed");
    let a = prompt("Введіть годину:");
    a = Number(a);
    let b = prompt("Введіть хвилину:");
    b = Number(b);
    let c = prompt("Введіть секунду:");
    c = Number(c);

    if(b >60)
        {
            a = b - 60;
        }
    if(c >60)
        {
            b = c -  60;
            c = 0;
        }
    
    if(a === null)
        {
            document.getElementById("res").innerHTML = "Висновок:" + " гг:" + b + ":" + c;
        }
    else if(a < 0 || a >24)
        {
            document.getElementById("res").innerHTML = "Висновок:" + " гг:" + b + ":" + c;
        }
    else if(b === null)
        {
            document.getElementById("res").innerHTML = "Висновок:" + a + ":хв:" + c;
        }
    else if(c === null)
        {
            document.getElementById("res").innerHTML = "Висновок:" + a + ":" + b + ":сс";
        }
    else
        {
            document.getElementById("res").innerHTML = "Висновок:" + a + ":" + b + ":" + c;
        }
}
const Eight = () => 
{
    alert("Task 8 executed");
    let a = prompt("Введіть годину:");
    a = Number(a);
    let b = prompt("Введіть хвилину:");
    b = Number(b);
    let c = prompt("Введіть секунду:");
    c = Number(c);

    if(a >24 || a < 0)
        {
            a = 0;
            let r = a*3600 + b*60 + c;
            document.getElementById("res").innerHTML = "Висновок:" + r + " секунд";
        }
    else if(b >60)
        {
            a = b - 60;
            b = 0;
            let r = a*3600 + b*60 + c;
            document.getElementById("res").innerHTML = "Висновок:" + r + " секунд";
        }
    else if(b <=60)
        {
            let r = a*3600 + b*60 + c;
            document.getElementById("res").innerHTML = "Висновок:" + r + " секунд";
        }
    else if(c >60)
        {
            b = c -  60;
            c = 0;
            let r = a*3600 + b*60 + c;
            document.getElementById("res").innerHTML = "Висновок:" + r + " секунд";
        }
    else if(c <=60)
        {
            let r = a*3600 + b*60 + c;
            document.getElementById("res").innerHTML = "Висновок:" + r + " секунд";
        }
}
const Nine = () => 
{
    alert("Task 9 executed");
    let a = prompt("Введіть кількість секунд:");
    a = Number(a);
    if(a < 0)
        {
            document.getElementById("res").innerHTML = "Висновок: Введено некоректне значення!";
        }
    else
        {
            document.getElementById("res").innerHTML = "Висновок:" + a*3600 + ":" + a*60 + ":" + a;
        }
}
const Ten = () => 
{
    alert("Task 10 executed");

    let a = prompt("Введіть годину:");
    a = Number(a);
    let b = prompt("Введіть хвилину:");
    b = Number(b);
    let c = prompt("Введіть секунду:");
    c = Number(c);

    let a1 = prompt("Введіть годину:");
    a1 = Number(a1);
    let b1 = prompt("Введіть хвилину:");
    b1 = Number(b1);
    let c1 = prompt("Введіть секунду:");
    c1 = Number(c1);
    let r = a*3600 + b*60 + c;
    let r1 = a1*3600 + b1*60 + c1;
    let main_r = r + r1;
    document.getElementById("res").innerHTML = "Висновок:" + main_r + " секунд = " + main_r/3600 + " годин " + main_r/60 + " хвилин " + main_r + " секунд";
}
let task = prompt("Enter a number between 1 and 10:");
task = Number(task);
switch (task)
{
    case 1: One(); break;
    case 2: Two(); break;
    case 3: Three(); break;
    case 4: Four(); break;
    case 5: Five(); break;
    case 6: Six(); break;
    case 7: Seven(); break;
    case 8: Eight(); break;
    case 9: Nine(); break;
    case 10: Ten(); break;
}
