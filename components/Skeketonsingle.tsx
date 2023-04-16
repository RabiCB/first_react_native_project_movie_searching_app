import { View, Text } from 'react-native'
import React from 'react'
import { styled } from "nativewind";


const StyledView = styled(View);
const StyledText = styled(Text);

const Skeketonsingle = () => {
  return (
    <StyledView className="flex flex-1 items-center justify-center  ">
      <StyledView className="bg-gray-100 h-[400px] w-80 flex gap-2 items-center justify-center rounded-md animate-pulse ">
        <StyledView className="w-72 h-60 bg-slate-300 object-cover rounded-md "></StyledView>
        <StyledText className="w-72 h-6 bg-slate-300  object-cover rounded-lg "></StyledText>
        <StyledText className="w-8 h-6 bg-slate-300  object-cover rounded-lg"></StyledText>
      </StyledView>
      
      
      

      

    </StyledView>
  )
}

export default Skeketonsingle