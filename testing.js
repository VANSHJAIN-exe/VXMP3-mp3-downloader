// problem :
// create a array and then from that array create a new array consisting of the sqaures of the previous array without manually adding them
// ill define the logic:
// pehele array lo
// phir us array ke sabhi elements ko square karo 
// woh sabhi elements naya arrayy declare kro usme push krdo

let a = [3,43,543,4,5,6,36,44]

let b = []
for(let i =0; i<a.length;i++){
    b.push(a[i]**2)
    console.log(b)
}
