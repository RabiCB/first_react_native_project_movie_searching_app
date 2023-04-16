import { View, Image, Text, ScrollView, SafeAreaView,Button} from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { styled } from "nativewind";
import { useRoute, useNavigation } from "@react-navigation/native";
import { HomeStackNavigatorParamList, SearchScreenRouteProp } from "../Types";
import { searchdata } from "../Types";
import Skeletonsearch from "./Skeletonsearch";

type Moviedata = {
  id?: number;
  original_title?: String;
  media_type: String;
  popularity: number;
  poster_path?: String;
  vote_count: number;
  name?: String;
};

const StyledView = styled(View);
const StyledText = styled(Text);

const baseurl = "https://api.themoviedb.org/3";
const apikey = "9c036091439dbae3762ef7dcadcc9238";
const imgurl = "https://image.tmdb.org/t/p/w500";

const Searchbar = () => {
  const navigation = useNavigation<HomeStackNavigatorParamList>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const route = useRoute<SearchScreenRouteProp>();
  const { searchdata } = route.params;
  const [loading ,setLoading]=useState(false)
  const [movies, setMovies] = useState([]);

  const getMoviesafterSearch = async () => {
    
    const res = await fetch(
      `${baseurl}/search/movie?api_key=${apikey}&query=%${searchdata}&page1`
    );
    const data = await res.json();
    setMovies(data.results);
    
  };

  useEffect(() => {
    getMoviesafterSearch();
  }, [searchdata]);

  return (
      <StyledView className="px-6 pt-10 pb-4 bg-black relative ">
        <StyledView className="absolute top-2 right-4">
        <Button title="Back" onPress={()=>{
          navigation.navigate("home")
        }}/>
        </StyledView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {movies.length>0?movies.map((movielist: Moviedata) => (
            <StyledView
              key={movielist.id}
              className="flex space-y-2 justify-center my-2 items-center flex-1"
            >
              <Image
                className="w-72 h-40 object-cover rounded-md"
                source={{
                  uri: `${imgurl}${
                    movielist.poster_path === null
                      ? "/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg"
                      : movielist.poster_path
                  }`,
                }}
              />
              <StyledText
                className="text-white font-semibold"
                onPress={() => {
                  navigation.navigate("details", {
                    itemId: movielist.id,
                  });
                }}
              >
                {movielist?.original_title}
              </StyledText>
              
            </StyledView>
          )):<Skeletonsearch/>}
        </ScrollView>
      </StyledView>
    
  );
};

export default Searchbar;
