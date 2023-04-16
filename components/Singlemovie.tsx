import { View, Text, SafeAreaView, Image, Button } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { styled } from "nativewind";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DetailsScreenRouteProp, HomeScreenNavigationProp } from "../Types";
import { StarIcon } from "react-native-heroicons/solid";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import Movieinfo from "./Movieinfo";
import Skeketonsingle from "./Skeketonsingle";

const baseurl = "https://api.themoviedb.org/3";
const apikey = "9c036091439dbae3762ef7dcadcc9238";
const imgurl = "https://image.tmdb.org/t/p/w500";

const StyledView = styled(View);
const StyledText = styled(Text);

type searchdata = {
  original_title?: String;
  overview?: String;
  media_type: String;
  poster_path?: String;
  vote_count: number;
  name?: String;
  tagline?: String;
  vote_average:Number;
  revenue: number|string;
  release_date: String;
};

export default function Singlemovie() {
  const [readmore, setReadmore] = useState<Boolean>(false);
  const [movie, setMovie] = useState(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })
  const route = useRoute<DetailsScreenRouteProp>();

  const { itemId } = route.params;
  console.log(itemId);

  const getSinglesmovies = async () => {
    const res = await fetch(
      `${baseurl}/movie/${itemId}?api_key=${apikey}&language=en-US`
    );
    const data = await res.json();
    setMovie(data);
    
  };

  useEffect(() => {
    getSinglesmovies();
  }, []);

  return (
    <SafeAreaView>
      <StyledView className="border-2 bg-black flex-1  justify-center items-center p-6 relative">
        <StyledView className="absolute top-2 right-4">
          <Button title="Back" onPress={()=>{
            navigation.navigate("home")
          }}></Button>
        </StyledView>
       {movie===null?<Skeketonsingle/>:<Movieinfo
          movie={movie}
          readmore={readmore}
          setReadmore={setReadmore}
        />}
      </StyledView>
    </SafeAreaView>
  );
}
