const {logger} = require('./logger');

function getCostFromId(id){
  return parseInt({1:'1000', 2:'2000', 3:'3000'}[id]);
}

function getDiscountById(id){
  return {1:'10%', 2:'20%', 3:'25%'}[id].replace(/\%/g, '');
}

function getFinalPrice(id){
  const itemCost = getCostFromId(id);
  const itemDiscount = getDiscountById(id);
  return itemCost - (itemDiscount / 100 * itemCost);
}




const Box = (x) => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`,
  fold:f=> f(x),
})

const getCostFromId = (id) =>
      Box({1:'1000', 2:'2000', 3:'3000'}[id])
      .map(parseInt);

const getDiscountById = (id) =>
   Box({1:'10%', 2:'20%', 3:'25%'}[id])
   .map(discount => discount.replace(/\%/g, ''))
   .map(discount => discount*0.001);



const getFinalPrice = (id) => {
  return getCostFromId(id)
  .map(cost =>
    getDiscountById(id)
    .map(discount => cost - discount*cost)
    .fold(x=>x)
  ).fold(x=>x)
}

console.log(getFinalPrice(3));
