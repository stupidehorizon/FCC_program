//依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 
//如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量.
//返回当前的库存数组，且按货物名称的字母顺序排列.

function updateInventory(arr1, arr2) {
  var  curObj={};
  var  newObj={};
  //将数组转为对象
  function arrToObj(arr)
  { 
    var obj={};
    for(var i=0,len=arr.length;i<len;i++)
      obj[arr[i][1]]=arr[i][0];
    return obj;
  }
  
  curObj=arrToObj(arr1);
  newObj=arrToObj(arr2);
  
  //添加货物，及属性
  
  for(i in newObj)  //for(i in obj) 循环obj中的属性；
   {
     if(curObj.hasOwnProperty(i)) //obj.hasOwnProperty();是否含有这和属性
       curObj[i]+=newObj[i];
     else
       curObj[i]=newObj[i];
   }
  
  //属性排名
  var keys=[];
  var finalObj={};
   keys=Object.keys(curObj).sort();//Obiect.keys(obj)取得对象的属性组成新的数组 .sort()给数组排序（适用于字符串）
   for(var i=0,len=keys.length;i<len;i++)
    {
      finalObj[keys[i]]=curObj[keys[i]];     
    }
  
 var finalArr=[];
///  for(var i=0,len1=keys.length;i<len;i++)      //这种方法为什么不行
//    {
 //     finalArr.push([finalObj[keys[i]],keys[i]]);
//    }
  for(i in finalObj)
    {
finalArr.push([finalObj[i],i]);      
    }
  
  return finalArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
function updateInventory(arr1, arr2) {
  var  curObj={};
  var  newObj={};
  //将数组转为对象
  function arrToObj(arr)
  { 
    var obj={};
    for(var i=0,len=arr.length;i<len;i++)
      obj[arr[i][1]]=arr[i][0];
    return obj;
  }
  
  curObj=arrToObj(arr1);
  newObj=arrToObj(arr2);
  
  //添加货物，及属性
  
  for(i in newObj)  //for(i in obj) 循环obj中的属性；
   {
     if(curObj.hasOwnProperty(i)) //obj.hasOwnProperty();是否含有这和属性
       curObj[i]+=newObj[i];
     else
       curObj[i]=newObj[i];
   }
  
  //属性排名
  var keys=[];
  var finalObj={};
   keys=Object.keys(curObj).sort();//Obiect.keys(obj)取得对象的属性组成新的数组 .sort()给数组排序（适用于字符串）
   for(var i=0,len=keys.length;i<len;i++)
    {
      finalObj[keys[i]]=curObj[keys[i]];     
    }
  
 var finalArr=[];
///  for(var i=0,len1=keys.length;i<len;i++)      //这种方法为什么不行
//    {
 //     finalArr.push([finalObj[keys[i]],keys[i]]);
//    }
  for(i in finalObj)
    {
finalArr.push([finalObj[i],i]);      
    }
  
  return finalArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
