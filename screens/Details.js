import { View, Image, Text, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data);
  return (
    <SafeAreaView>
      <FocusedStatusBar
        barStyle="dark-content"
      />
    </SafeAreaView>
  )
}

export default Details