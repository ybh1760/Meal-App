# The Meal App

## React-navigation 시작하기 

- stack navigator 사용하기
    1. createStackNavigator({}) 를 통해  react-component를 생성한다.
    2. createAppNavigator() 를 통해 creatStackNavigator로 생성된 react-component를 인자로 받아 react-component를 생성한다.
    3. 항상 stackNavigator를 생성 후 appNavigator의 인자로 넘겨 받아 component를 생성하여 사용해야한다.
    4. createStackNavigator의 인자로 routeName과 routeName을 통해 이동할 react-component를 주어야 한다.
    5. createStackNavigator를 통해 component를 생성 할 때  인자로 넘겨 줬던 react-component의 props에 navigation객체가 넘겨진다.
    6. props로 전달된 navigation 객체의 navigate메소드를 사용하여 컴포넌트 별로 이동할수 있게된다.