import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styled } from "nativewind";
import Skeketonsingle from "./Skeketonsingle";

const StyledView = styled(View);
const StyledText = styled(Text);
const imgurl = "https://image.tmdb.org/t/p/w500";

const Movieinfo = ({ movie, readmore, setReadmore }: any) => {
  return (
    <StyledView className="flex h-[540px] items-center justify-center gap-2  rounded-lg  relative ">
      <StyledView className="relative items-center justify-center">
        <Image
          className="w-72 h-60 object-cover rounded-md "
          source={{ uri: `${imgurl}${movie.poster_path}` }}
        />
        <StyledView className="absolute left-2 bottom-4 text-sm">
          <StyledText className="text-white">
            {Math.round(movie.vote_average)}
          </StyledText>
        </StyledView>
        <StyledView className="absolute right-2 bottom-4">
          <StyledText className="text-white text-sm">
            {movie.release_date}
          </StyledText>
        </StyledView>
      </StyledView>
      <StyledText className="font-semibold text-white">
        {movie.original_title}
      </StyledText>
      <StyledView className="flex  gap-1">
        <StyledText className="text-white">
          {readmore === false
            ? `${movie.overview?.substring(0, 80)}...`
            : `${movie.overview}`}
        </StyledText>
        <StyledText
          onPress={() => {
            setReadmore(!readmore);
          }}
          className="text-gray-400"
        >
          {readmore ? "read less" : "read more"}
          <StyledText></StyledText>
        </StyledText>
      </StyledView>
      {movie.revenue > 0 && (
        <StyledView>
          <StyledText className="text-white">
            {" "}
            Revenue:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(movie.revenue)}
          </StyledText>
        </StyledView>
      )}
      
    </StyledView>
  );
};

export default Movieinfo;
