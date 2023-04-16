import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";


const StyledView = styled(View);
const StyledText = styled(Text);

const Skeleton = () => {
  return (
    
    <StyledView className="flex flex-1 flex-row gap-2 px-4 mb-4   ">
      <StyledView className="bg-gray-100 h-32 w-32 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 h-32 w-32 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 h-32 w-32 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 h-32 w-32 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 h-32 w-32 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 h-32 w-32 rounded-md animate-pulse "></StyledView>
      
      

      

    </StyledView>
    
    
  );
};

export default Skeleton;
