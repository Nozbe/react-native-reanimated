import { Image, ScrollView, Text, View } from 'react-native';
import Easing from './Easing';
import AnimatedClock from './core/AnimatedClock';
import AnimatedValue from './core/AnimatedValue';
import AnimatedNode from './core/AnimatedNode';
import AnimatedCode from './core/AnimatedCode';
import * as base from './base';
import * as derived from './derived';
import createAnimatedComponent from './createAnimatedComponent';
import {
  addWhitelistedNativeProps,
  addWhitelistedUIProps,
} from './ConfigHelper';
import {
  Transition,
  Transitioning,
  createTransitioningComponent,
} from './Transitioning';
import SpringUtils from './animations/SpringUtils';
import useValue from './useValue';

const Animated = {
  // components
  View: createAnimatedComponent(View),
  Text: createAnimatedComponent(Text),
  Image: createAnimatedComponent(Image),
  ScrollView: createAnimatedComponent(ScrollView),
  Code: AnimatedCode,
  createAnimatedComponent,

  // classes
  Clock: AnimatedClock,
  Value: AnimatedValue,
  Node: AnimatedNode,

  // operations
  ...base,
  ...derived,

  // animations
  get decay() {
    return require('./animations/decay').default;
  },
  get timing() {
    return require('./animations/timing').default;
  },
  get spring() {
    return require('./animations/spring').default;
  },
  SpringUtils,

  // configuration
  addWhitelistedNativeProps,
  addWhitelistedUIProps,

  // hooks
  useValue,
};

module.exports = {
  __esModule: true,
  default: Animated,

  // other
  Easing,
  Transitioning,
  Transition,
  createTransitioningComponent,

  // classes
  Clock: AnimatedClock,
  Value: AnimatedValue,
  Node: AnimatedNode,

  // operations
  ...base,
  ...derived,

  // animations
  get decay() {
    return require('./animations/decay').default;
  },
  get timing() {
    return require('./animations/timing').default;
  },
  get spring() {
    return require('./animations/spring').default;
  },
  SpringUtils,

  // hooks
  useValue,
};
