# rn-dashboard
rn-dashboard finfosoft used
## 准备工作
npm i rn-dashboard --save

根据你的项目版本安装 [react-native-svg](https://github.com/react-native-community/react-native-svg)

## 使用方法
使用方法参照示例,示例中的值为默认值。角度数据参考下图：

![角度参考](https://github.com/always-early-heart/rn-dashboard/blob/master/example.png)
## 示例
    import Dashboard from 'rn-dashboard';
    //……
    <Dashboard 
      width = 100, // 宽度，也是高度，因为仪表盘是一个正圆型的
      startAngle = -130, // 开始的角度
      endAngle = 130, // 结束的角度   必须大于startAngle
      startColor = "#11eeee", // 开始颜色
      endColor = "#119999", // 结束的颜色
      defaultColor = "#eeeeee", // 默认颜色
      scaleWidth = 2, // 刻度的宽度
      scaleLength = 10, // 刻度的长度
      scaleInterval=5, // 刻度间隔度数 最好(endAngle-startAngle)%scaleInterval=0
      value = 80 //当前值，最大值为100
    ></Shadow>
    //……
