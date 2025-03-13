import { createNavigationContainerRef, useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/native';
import { Route } from '../Constants';

export const navigationRef = createNavigationContainerRef();
export function pushWithoutHook(name: Route, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params))
  }
}

export function popWithoutHook() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function closeModal() {
  if (navigationRef?.isReady() && navigationRef?.canGoBack()) {
    if(!preventNavigation) {
      preventNavigation = true;
      setTimeout(() => {
        preventNavigation = false;
      }, 500);
      return navigationRef?.goBack();
    }
  }
}

export function focusedScreenName() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name;
  }
}


let preventNavigation = false;
const useCustomNavigation = () => {
  const navigation = useNavigation();

  const popToTop = () => navigation.dispatch(StackActions.popToTop());

  const popTo = (count: number) => navigation.dispatch(StackActions.pop(count));

  // const push = (route: Route, params?: any) => navigation.push(route, params);
  const push = (route: Route, params?: any) =>  {
    if(!preventNavigation) {
      preventNavigation = true;
      setTimeout(() => {
        preventNavigation = false;
      }, 500);
      return navigation.dispatch(StackActions.push(route, params))
    }
  }

  const pop = () => {
    if(navigation.canGoBack()) {
      navigation.goBack()
    }
  };

  const replace = (route: Route, params?: any) =>
    navigation.dispatch(StackActions.replace(route, params));


  return {
    popToTop,
    popTo,
    push,
    pop,
    replace,
  };
};

export default useCustomNavigation;
