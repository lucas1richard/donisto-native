import React from 'react';
import { View } from 'react-native';
import Txt from 'components/Txt';
import Touchable from 'components/Touchable';

function TOSandPrivacy() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Txt color="light">
        By Proceeding, I agree to the
      </Txt>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Touchable>
          <View>
            <Txt color="light" style={{ fontWeight: '800' }}>
              Terms of Use
            </Txt>
          </View>
        </Touchable>
        <Txt color="light">
          &nbsp;and&nbsp;
        </Txt>
        <Touchable>
          <View>
            <Txt color="light" style={{ fontWeight: '800' }}>
              Privacy Policy
            </Txt>
          </View>
        </Touchable>
      </View>
    </View>
  );
}

export default TOSandPrivacy;
