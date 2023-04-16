import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../Types";

const imgurl = "https://image.tmdb.org/t/p/w500";

const StyledView = styled(View);
const StyledText = styled(Text);

const Upcoming = ({ trending }: any) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <TouchableOpacity
      key={trending.id}
      onPress={() => {
        navigation.navigate("details", {
          itemId: trending.id,
        });
      }}
      className="flex items-center mr-[6px]"
    >
      <Image
        className="w-32 h-32 rounded-md aspect-square"
        source={{
          uri: `${imgurl}${
            trending.poster_path === null
              ? "/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg"
              : trending.poster_path
          }`,
        }}
      />
      <StyledText
       
        className="text-[8px] text-center text-white"
      >
        {trending.original_title ? trending.original_title : trending?.name}
      </StyledText>
     
    </TouchableOpacity>
  );
};

export default Upcoming;
