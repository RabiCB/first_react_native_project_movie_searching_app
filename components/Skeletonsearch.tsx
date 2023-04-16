import { View, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind' 

const StyledView = styled(View);
const StyledText = styled(Text);

const Skeletonsearch = () => {
  return (
    <StyledView className="flex flex-1 justify-content items-center space-x-2 space-y-4 px-4 mb-4 pt-10 ">
      <StyledView className="bg-gray-100 w-72 h-40 rounded-md animate-pulse ">
        
      </StyledView>
      <StyledView className="bg-gray-100 w-72 h-40 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 w-72 h-40 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 w-72 h-40 rounded-md animate-pulse "></StyledView>
      <StyledView className="bg-gray-100 w-72 h-40 rounded-md animate-pulse "></StyledView>
      

    </StyledView>
  )
}

export default Skeletonsearch