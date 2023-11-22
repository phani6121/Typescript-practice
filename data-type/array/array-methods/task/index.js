// interface monthType{
//     month_sno:number,
//     month_year:string
// }
// const months:monthType[]=[
// {
//     month_sno:1,
//     month_year:"jan-2023"
// },
// {
//     month_sno:2,
//     month_year:"feb-2023"
// },
// {
//     month_sno:3,
//     month_year:"march-2023"
// },
// {
//     month_sno:4,
//     month_year:"apr-2023"
// },
// {
//     month_sno:5,
//     month_year:"may-2023"
// },
// {
//     month_sno:6,
//     month_year:"june-2023"
// },
// {
//     month_sno:7,
//     month_year:"july-2023"
// },
// {
//     month_sno:8,
//     month_year:"aug-2023"
// },
// {
//     month_sno:9,
//     month_year:"sep-2023"
// },
// {
//     month_sno:10,
//     month_year:"oct-2023"
// },
// {
//     month_sno:11,
//     month_year:"nov-2023",
// },
// {
//     month_sno:12,
//     month_year:"dec-2023"
// }]
// months.forEach((monthName,indexValue)=>{
//     monthName["days"]=30//
//     delete.month_sno
// })
// console.log(months);
// interface monthType {
//     month_sno: number,
//     month_year: string
// }
// let month:number=0
// let months = [];
// for (let i = 0; i <= 10; i++) {
//     month[i] = {
// interface monthType {
//     month_sno: number,
//     month_year: string
// }
// let monthType = []
// let yearInfo=[];
// let monthName=["jan_2023","feb_2023","mar_2023","apr_2023","may_2023","june_2023","july_2023","aug_2023","sep_2023","oct_2023","nov_2023","dec_2023"]
// for (let i = 0; i < 12; i++) {
//     let monthType = {
//         month_sno: i + 1,
//         month_year:monthName[i]
//    }
//    console.log(monthType);
// }
// console.log(Object.values(monthName));
var monthsData = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
var monthsDataIncludingMissedMonth = ["jan", "feb", "mar", "apr", "june", "july", , "aug", "sep", "oct", "nov", "dec"];
var year = new Date().getFullYear();
var months;
var overAllMonts = monthsData.map(function (item, index) {
    var boolean = false;
    var obj;
    monthsDataIncludingMissedMonth.forEach(function (element) {
        if (item == element) {
            boolean = true;
            obj = {
                month_sno: index + 1,
                month_year: "".concat(item, "-").concat(year)
            };
        }
    });
    if (boolean) {
        return obj;
    }
    {
        console.log("from my side", index);
        return {
            month_sno: index + 1,
            month_year: "".concat(item, "-").concat(year)
        };
    }
});
console.log(overAllMonts);
// const data = months.map(item => {
//     return item.forEach(element => {
//     })
// })
