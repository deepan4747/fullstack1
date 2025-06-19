//mul
function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b
}
console.log(mul(12,11));

//
const obj={
    name:'Cris',
    age:40,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());

//map-return new array after executing function on every element
const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((n)=>n*3)
console.log(mappednum);
//filter-return new array with element satisfying the condition
//(i) postive num
const posNum=numbers.filter((n)=>n>0)
console.log(posNum)
//(ii) odd num
const oddNum=numbers.filter((n)=>n%2!=0 && n>0)
console.log(oddNum)

//reduce-reduced to single element
const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);

//
const products=[
    {name:'tv',price:8000},
    {name:'phone',price: 5000},
    {name: 'lap',price:7500},
    {name: 'game',price:2500},
    {name: 'remote',price:4500},
    {name: 'ac',price:9500}
]
  const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
  console.log(totalPrice);
  const greatPrice=products.filter((products)=>products.price>5000)
  console.log(greatPrice);

  //Destructing
   const number=[1,2,3,4,5,6]
   const [first,second,third]=number
   console.log(third)
          const user={name:'CR7',password:'12345678'}
          const {name,password}=user
          console.log(password);

//spread
const arr1=[1,2,3]
const arr2=[4,5,6]
const copy1=[...arr1,...arr2]
console.log(copy1);       
const copy2=[...arr2,...arr1]
console.log(copy2);


// Rest Parameters
function add2(...args) {
  return args.reduce((sum, n) => sum + n, 0);
}
console.log("Sum:", add2(1, 2, 3, 4, 5));  // Output: 15


//callback
function function1() {
  console.log('from inside callback');
}
function fun(name, callback) {
  callback();
  return `${name} from outside callback`;
}
console.log(fun('function', () => {
  console.log('from inside callback');
}));


//
//(i)
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchUsers();
//(ii)
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    //console.log(data);
    data.map((a)=>console.log(a.name))
  } catch (error) {
    console.log(error);
  }
}
fetchUsers();
