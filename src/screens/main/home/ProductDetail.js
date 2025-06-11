import { Image, StyleSheet, Text, View } from "react-native";
import { icons, images } from "../../../constants";

const ProductDetail = () => {
  return (
    <View>
      <Image source={icons.logo} style={{ height: 200, width: 200 }} />

      <Image source={images.logo5} style={{ height: 200, width: 200 }} />
      <Text>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
