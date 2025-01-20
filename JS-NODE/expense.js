const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let expense_array=[];
let amount_array=[];

function Showmenu(){
    console.log(`===Expense Tracker===
        1.Add Expense
        2.View Expense
        3.Total Amount
        4.Exit`)

    rl.question(`Choose an option (1-4):`,handleoption)

}
function handleoption(option){
    switch(option){
        case '1' : 
             rl.question(`Enter an Expense Category:`,(category)=>{
                rl.question(`Enter Amount :`,(amount)=>{
                    rl.question(`Enter Date :`,(date)=>{
                        if(category==""||amount==0)
                        {
                            console.log(`Enter a valid input`)
                        }
                        else
                        {
                           expense_array.push(category,amount,date);
                           amount_array.push(Number(amount));
                           console.log(`Expense Added :`,expense_array)
                        }
                        Showmenu()
                    })
                })
             })
             break;
        case '2':
            {
                let list=expense_array.length?expense_array.join(','):"Invalid";
                console.log(`Expenses is :`,list);
                Showmenu();
                break;
            }
        case '3':
            { 
              Total=0;
              for(i=0;i<amount_array.length;i++)
              {
                 Total=Total+amount_array[i];
              }
              console.log(`Total Amount is:`,Total)
              Showmenu();
              break;

            }
           
        case '4':
            {
                console.log(`Tracker Exit`);
                rl.close();
                break
            }
        default :
        {
            console.log(`Enter a valid EXpense`)
        }
    }
}
Showmenu();
