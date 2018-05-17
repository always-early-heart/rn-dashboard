import React, { Component } from 'react'
import { View } from 'react-native'
import Svg, {Line} from 'react-native-svg'
/**
 * @author liupengfei 
 * Simple dashboard
 */
export default class Dashboard extends Component {
  render = () => {
    const {
      width = 100, // 宽度，也是高度，因为仪表盘是一个正圆型的
      startAngle = -130, // 开始的角度
      endAngle = 130, // 结束的角度
      startColor = "#11eeee", // 开始颜色
      endColor = "#119999", // 结束的颜色
      defaultColor = "#eeeeee", // 默认颜色
      scaleWidth = 2, // 刻度的宽度
      scaleLength = 10, // 刻度的长度
      value = 80 //当前值，最大值为100
    } = this.props

    let startColorRed = parseInt(startColor.slice(1, 3), 16);
    let startColorGreen = parseInt(startColor.slice(3, 5), 16);
    let startColorBlue = parseInt(startColor.slice(5, 7), 16);

    let endColorRed = parseInt(endColor.slice(1, 3), 16);
    let endColorGreen = parseInt(endColor.slice(3, 5), 16);
    let endColorBlue = parseInt(endColor.slice(5, 7), 16);

    let red = (endColorRed - startColorRed) / 100;
    let green = (endColorGreen - startColorGreen) / 100;
    let blue = (endColorBlue - startColorBlue) / 100;

    const getLine = () => {
      const lines = [];
      let angle = startAngle;
      while (angle < endAngle) {
        let x = (angle - startAngle) / (endAngle - startAngle) * 100;
        let color;
        if (x < value) {
          color = "#" + parseInt(startColorRed + red * x).toString(16) +
            parseInt(startColorGreen + green * x).toString(16) +
            parseInt(startColorBlue + blue * x).toString(16);
        } else {
          color = defaultColor;
        }
        lines.push(
          <Line x1={width / 2}
            y1="0" x2={width / 2}
            y2={scaleLength}
            stroke={color}
            strokeWidth={scaleWidth + ""}
            rotation={angle}
            origin={`${width / 2},${width / 2}`}
            key={angle} />)
        angle += 5;
      }
      return lines;
    }
    return (
      <View style={{ height: width, width: width, alignSelf: "center" }} >
        <Svg height={width} width={width} >
          {getLine()}
        </Svg>
      </View>
    )
  }
}
