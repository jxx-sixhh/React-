/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2){
    if(num1=='0')
    {
        return num2;
    }   
    if(num2=='0')
    {
        return num1;
    }
    //x和y分别为两个字符串数组的最末尾游标
    var x=num1.length-1;
    var y=num2.length-1;
    //ans是字符串类型也是最后返回的，up是进位
    var ans='';
    var up=0;
    //当两个传入的字符串位数没有加完时一直进行
    while(x>=0||y>=0)
    {
        //temp是两个字符串同位相加的结果，每次循环重置为0
        var temp=0;
        
        if(x>=0)
        {
             temp=temp+(num1[x]-'0');
             //每进行一次往前移一位
             x--;
        }
        
        if(y>=0)
        {
            temp=temp+(num2[y]-'0');
            y--;
        }
        //加上上一次相加进的位
        temp=temp+up;
        //console.log(temp);
        
        //超过十了就进位，最多也只能是19所以up最多为1
        if(temp>=10)
        {
             up=1;
        }
        else{
            up=0;
        }
        ans = temp % 10 + ans;
        //console.log(up+'@'+ans);
    }
    //如果最后一次运算有进位了，不会再while里加上，最后单独判断一次
    if (up === 1) {
      ans = up + ans
  }
  return ans
  }
  console.log(addStrings('123489','15321'));//138810