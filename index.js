let hour=prompt("enter thre time");

if(hour>=5&&hour<=12)
{
    document.write("good morning");
}
else if(hour>=13&&hour<=17)
{
    document.write("good afternoon");
}
 else if(hour>=18&&hour<=21)
{
    document.write("good evening");
}
else if(hour>=22&&hour<=24)
{
    document.write("this is night time");
}
else if(hour<=4&&hour>=1)
{
    document.write("this is night time");
}
else if (hour>24)
{
    document.write("not vaild time");
}