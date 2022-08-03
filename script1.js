//chunk() method
const sliceIntoChunks=(arr,chunkSize)=>{
    const res=[];

    for(let i=0;i<arr.length;i+=chunkSize){
        const chunk = arr.slice(i,i+chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr =[1,2,3,4,5,6,7,8,9,10];
console.log(sliceIntoChunks(arr,3));
 
       
// reduce() method
let users = { 'p': 2, 'q': 3, 'r':2, 's': 2  }
   
let gfg = _.reduce(users, 
    (result, value, key)=> {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});
  
console.log(gfg);

//filter() method
let users1 = [
    { 'user': 'luv',
      'salary': 36000,
      'active': true },
    { 'user': 'kush', 
      'salary': 40000,
      'active': false }
  ];
    
  let filtered_array = _.filter(
      users, (o)=> {
         return !o.active;
      }
  );
    
  console.log(filtered_array);

  //find method
  let x = [-1, 29, 7, 10, 13, 15];
 
let result = _.find(x, (n)=> {
    if (n > 10) {
        return true;
    }
}, 2);
 
console.log(result);

//sum method
let arr1 = [{ 'n': 10 }, { 'n': 5 }, { 'n': 3 }, { 'n': 12 }];
     
let sum = _.sumBy(arr1, 'n'); 
          
console.log(sum);