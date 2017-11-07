/**
 * 角标组件
 * 注意：
 * 1. Badge 没有宽度，跨度随外部容器变化
 */
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const NUMBER_HEIGHT = 14;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 7,
    height: NUMBER_HEIGHT,
    minWidth: NUMBER_HEIGHT,
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: '#fff',
    marginTop: -1,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  padding: {
    padding: 4,
  },
  dotStyle: {
    height: 8,
    minWidth: 8,
    top: -3,
    right: -4,
  },
});

class Badge extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 0,
      top: -5,
      right: -5,
      borderRadius: 7,
    };
  }

  // 获取徽标的布局信息
  setPosition = (params) => {
    const { nativeEvent } = params;
    const { layout } = nativeEvent;
    const { width, height } = layout;
    this.setState({
      top: -(height * 0.5),
      right: -(width * 0.5),
      borderRadius: height * 0.5,
      opacity: 1,
    });
  }

  // 小红点生成器
  createDot = () => {
    let str = null;
    if (this.props.dot) {
      str = (<View
        style={[styles.textContainer, styles.dotStyle, this.props.textContainerStyle]}
      >
        <Text style={[styles.text, this.props.textStyle]}>{null}</Text>
      </View>);
    }
    return str;
  }

  render() {
    let text = this.props.text;

    if (typeof text !== 'string') {
      text = `${text}`;
    }

    return (
      <View style={[styles.container, this.props.style]}>
        {
          this.props.children
        }
        {
        text.length > 0 ? (
          <View
            style={[styles.textContainer, styles.padding, {
              right: this.state.right,
              top: this.state.top,
              borderRadius: this.state.borderRadius,
              opacity: this.state.opacity,
            }, this.props.textContainerStyle]}
            onLayout={this.setPosition}
          >
            <Text
              style={[styles.text, this.props.textStyle]}
              numberOfLines={1}
              onLayout={this.setHeight}
            >
              {text}
            </Text>
          </View>
        ) : this.createDot()
      }
      </View>
    );
  }
}

Badge.propTypes = {
  // 自定义样式
  style: View.propTypes.style,
  // 自定义文本容器样式
  textContainerStyle: View.propTypes.style,
  // 自定义文本样式
  textStyle: Text.propTypes.style,
  // 角标文本内容
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // 主体元素
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  // 单独使用小红点
  dot: PropTypes.bool,
};
Badge.defaultProps = {
  style: null,
  textContainerStyle: null,
  textStyle: null,
  text: '',
  children: null,
  dot: null,
};

export default Badge;
