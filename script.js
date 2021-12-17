//Creat answer
var num_answer=[
    -1,-1,-1,-1
]
function answer() {
    var count=0;        
    var ran_num;
    ran_num=Math.round(Math.random()*9);
    num_answer[count]=ran_num;
    for(i=1;i<4;i++)
    {
        ran_num=Math.round(Math.random()*9);
        if(ran_num!=num_answer[0]&&ran_num!=num_answer[1]&&ran_num!=num_answer[2])
        {
            count++;
            num_answer[count]=ran_num;
        }
        else
        {
                i--;
        }
        // for(i=0;i<4;i++)
        // {
        //     console.log(num_answer[i]);
        // }
    }
    //console.log(num_answer[0],num_answer[1],num_answer[2],num_answer[3],)
    return num_answer;
}


//press btn to present num---variable
var input_times=0;
var input_num_id=[
    "num0","num1","num2","num3"
]    
var can_input_num=[
    true,true,true,true
]
var input_num_int=[
    -1,-1,-1,-1
]
var btnid=[
    null,null,null,null
]
var get_num;
//press btn to present num
function present_num(btn)
{      
    if(input_times<4)
    {                
        if(can_input_num[input_times]==true)
        {
            can_input_num[input_times]=false;
            get_num=document.getElementById(input_num_id[input_times]);                     
            get_num.innerText=btn.innerText; 
            btnid[input_times]=get_num.innerText;
            input_num_int[input_times]=  get_num.innerText;
            // console.log(input_times);
            // console.log(input_num_int[input_times]);
            console.log(btnid[input_times]);
            input_times++;
        }
        
        btn.disabled=true;  //讓按鈕不能按
    }       
    
}




//delete last number
function delete_num() {
    if(input_times<=4)
    {
        input_times--
        get_num=document.getElementById(input_num_id[input_times]);  
        can_input_num[input_times]=true;    
        input_num_int[input_times]=-1;    
        get_num.innerText="*";
        element=document.getElementById("btn"+btnid[input_times])
        element.disabled=false;
        // console.log(input_times);
        // console.log(input_num_int[input_times]);
    }
    else
    {
        
    }
    for(i=0;i<4;i++)
    {
        console.log(input_num_int[i]);
    }
}


//refresh website
function restart() {
    history.go(0);
}

var gs_time=0;
function check_num(){
    if(can_input_num[3]!=false)
    {
        alert("請輸入四個數字");
    }
    else
    {  
        var a=0;
        var b=0; 
        var guess_input="";
        var guess_ans="";        
        //console.log(input_num_int[0].toString())    ;
        for(i=0;i<4;i++)
        {
            guess_input+=input_num_int[i];
            guess_ans+=num_answer[i];
            can_input_num[i]=true;
        }
        for(i=0;i<4;i++)
        {
            if(guess_input.indexOf(num_answer[i])>-1)
            {
                if(num_answer[i]==input_num_int[i])
                {
                    a++;
                }
                else
                {
                    b++;
                }
            }           
        }       
        
        ans_ab=ab_result(a,b);
        layouttoscreen(guess_input,ans_ab);
        open_btn();
        nums_zero()
        gs_time=gs_time+1;
        count_guess_times(gs_time);
        input_times=0;
        console.log(ans_ab);
        ;  

    }
    
}

function open_btn()
{
    for(i=0;i<10;i++)
    {
        element=document.getElementById("btn"+i);
        element.disabled=false;
    }    
    input_times=0;
}

function nums_zero()
{
    for(i=0;i<4;i++)
    {
        element=document.getElementById("num"+i)
        element.innerText="*";
    }
    
}


//
var last_ans="";
var last_1a2b="";
function layouttoscreen(guess_input,a1b2)
{
    last_ans=document.getElementById("last_answer");
    last_ans.innerText+=guess_input+"\n";
    last_1a2b=document.getElementById("last_1a2b");
    last_1a2b.innerText+=a1b2+"\n";
}

function ab_result(a,b)
{
    if(a==4)
    {
        str = a+"A "+b+"B";
        alert("猜對啦~~");
        history.go(0);
        //return str;
    }
    else
    { 
        str = a+"A "+b+"B";
        return str;
    }
}

function count_guess_times(t)
{    
    var gs=document.getElementById("guess_times");
    gs.innerText=t+"次";
}


