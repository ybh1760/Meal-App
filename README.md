# The Meal App

## React-navigation 시작하기 

### stack navigator 사용하기

1. createStackNavigator({}) 를 통해  react-component를 생성한다.
2. createAppNavigator() 를 통해 creatStackNavigator로 생성된 react-component를 인자로 받아 react-component를 생성한다.
3. 항상 stackNavigator를 생성 후 appNavigator의 인자로 넘겨 받아 component를 생성하여 사용해야한다.
4. createStackNavigator의 인자로 routeName과 routeName을 통해 이동할 react-component를 주어야 한다.
5. createStackNavigator를 통해 component를 생성 할 때  인자로 넘겨 줬던 react-component의 props에 navigation객체가 넘겨진다.
6. props로 전달된 navigation 객체의 navigate메소드를 사용하여 컴포넌트 별로 이동할수 있게된다.

- createStackNavigator({},{})
  1. createStackNavigator의 두 번째 인자로 defaultNavigationOptions을 셋팅할 수 있다.
  2. defaultNavigationOptions은 가장 낮은 우선 순위를 가지며, 각 컴포넌트에서 override할 수 있다.

- navigation 을 통해 screen을 이동하는 메소드   
    1. navigation.navigate({routeName : "~~~~~"}) : stacknavigator의 routeName이 ~~~~~로 지정된 컴포넌트를 stack에 쌓고 stack의 topmost를 렌더링한다.
    2. navigation.push("~~~~~") : stacknavigator의 routeName이 ~~~~~로 지정된 컴포넌트를 stack에 쌓고 stack의 topmost를 렌더링한다.
                                  navigate와의 차이점은 push는 자기자신도 stack에 쌓을 수 있다.
    3. navigation.goBack() : stack의 이전 값으로 이동한다. 다른 navigator에서도 사용가능하다
    4. navigation.pop() : stack의 이전 값으로 이동한다. stacknavigator에서만 사용 가능하다.
    5. navigation.replace("~~~~~~") : stack의 위에 쌓는 것이 아니라 route자체를 replace하여준다.

- navigation의 header 변경하는 법
    1. 화면에 렌더링 되고 있는 컴포넌트의 props에 navigationOptions의 headerTitle, headerStyle, headerTintColor 등을 변경함으로서 header를 변경할 수 있다.
    2. navigationOptions에 함수를 넘겨줄 경우 인자로 navigationData가 넘어온다. navigationData는 컴포넌트 내에서 사용 되는 navigation객체를 갖고 있기 때문에 이전 스크린으로 부터 전달 받은 params를 동적으로 사용할 수 있다.

- navigate메소드로 params 보내기
  1. navigate({routeName:"~~~~", params:{"paramName" : }}) navigate의 인자로 객체를 넘길때 params를 설정 할수 있다.
  2. 전달 받은 스크린에서는 props.navigation.getParam("paramName") 을 통해서 값을 얻을 수 있다.