tofindgrade();
function tofindgrade(){
let marks=prompt("enter the marks")
if(marks>=80&&marks<=100)
{
    document.write("you got the  A grade and your marks is ",marks )
}
else if (marks>=75&&marks<80)
{
    document.write("you got the  B+ grade and your marks is ",marks )
}
else if (marks>=70&&marks<75)
{
    document.write("you got the  B grade and your marks is ",marks )
}
else if (marks>=65&&marks<70)
{
    document.write("you got the  C+ grade and your marks is ",marks )
}
else if (marks>=60&&marks<65)
{
    document.write("you got the  C grade and your marks is ",marks )
}
else if (marks>=55&&marks<60)
{
    document.write("you got the  D+ grade and your marks is ",marks )
}
else if (marks>=50&&marks<55)
{
    document.write("you got the  D grade and your marks is ",marks )
}
else if (marks<50&&marks>=0)
{
    document.write("you got the  f grade try again ",marks )
}
else{
    document.write(" you enter invalid data ")
}

}