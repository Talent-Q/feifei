// 可以细化时间，拓展编辑，尝试加入随机函数，弹窗

function greeting(){
    var now = new Date();
    var hour = now.getHours();

    if(hour<6){document.write("<p>&emsp;&emsp;现在是凌晨时分，还在忙碌呢，有我陪着你。</p>")}
    else if(hour<8){document.write("<p>&emsp;&emsp;狒狒，早上好！美妙的一天开始啦，早起的鸟儿有虫吃~</p>")}
    else if(hour<12){document.write('<p>&emsp;&emsp;上午学习偷懒了没？快去吃块糖"惩罚"一下自己!</p>')}
    else if(hour<14){document.write("<p>&emsp;&emsp;用完午餐的你，闭上眼睛休息一下吧！</p>")}
    else if(hour<18){document.write("<p>&emsp;&emsp;让你中午不睡，困了吧，哈哈哈！</p>")}
    else if(hour<20){document.write('<p>&emsp;&emsp;晚餐吃了吗，不然"给你两瓢瓢"！</p>')}
    else if(hour<22){document.write("<p>&emsp;&emsp;学习累了吗？来杯咖啡？</p>")}
    else{document.write("<p>&emsp;&emsp;夜深了！不做夜猫子，早点休息哦，晚安！</p>")}
}