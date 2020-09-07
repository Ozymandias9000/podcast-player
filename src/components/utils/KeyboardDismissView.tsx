import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";

interface Props {
  withScrollView?: boolean;
}

const KeyboardDismissView: React.FC<Props> = ({ withScrollView, children }) => {
  if (withScrollView) {
    return (
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={s.container}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={s.container}
      onPress={Keyboard.dismiss}
    >
      {children}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardDismissView;
