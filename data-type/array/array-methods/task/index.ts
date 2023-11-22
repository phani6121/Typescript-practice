interface monthType {
    month_sno: number,
    month_year: string
}
let monthType = []

let yearInfo=[];
let monthName=["jan_2023","feb_2023","mar_2023","apr_2023","may_2023","june_2023","july_2023","aug_2023","sep_2023","oct_2023","nov_2023","dec_2023"]
for (let i = 0; i < 12; i++) {
    let monthType = {
        month_sno: i + 1,
        month_year:monthName[i]
   }

   console.log(monthType);

}
console.log(Object.values(monthName));


















// const monthsData = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
// const monthsDataIncludingMissedMonth = ["jan", "feb", "mar", "apr", "june", "july", , "aug", "sep", "oct", "nov", "dec"];
// const year = new Date().getFullYear();
// let months: any;
// const overAllMonts = monthsData.map((item, index) => {
//     let boolean = false
//     let obj: any;
//     monthsDataIncludingMissedMonth.forEach(element => {
//         if (item == element) {
//             boolean = true;
//             obj = {
//                 month_sno: index + 1,
//                 month_year: `${item}-${year}`
//             }
//         }
//     });
//     if (boolean) {
//         return obj;
//     } {
//         console.log("from my side", index);
//         return {
//             month_sno: index + 1,
//             month_year: `${item}-${year}`
//         }
//     }
// })

// console.log(overAllMonts);


// const data = months.map(item => {
//     return item.forEach(element => {
//     })
// })









