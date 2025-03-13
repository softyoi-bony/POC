import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useCustomNavigation from '../../hooks/useCustomNavigation';
import AppSvgIcon from '../AppSvgIcon';
import { moderateScale } from '../../Constants';

const HeaderComponent = ({title}) => {
  const {pop} = useCustomNavigation();
  return (
    <View style={{height: 40, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{margin: 10, width: 50}} onPress={pop}>
          <AppSvgIcon
              name={'RightArrow'}
              height={moderateScale(30)}
              width={moderateScale(30)}
              stroke={'black'}
              style={[
                {
                  transform: [{ rotate: '180deg' }],
                  },
                  ]}
                  />
                      {/* <AppSvgIcon name="RightArrow" width={24} height={24}/> */}
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 50,
          }}>
          <Text>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;
