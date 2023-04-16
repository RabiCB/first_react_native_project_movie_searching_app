import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { withExpoSnack } from "nativewind/dist/expo-snack";
import {
  FilmIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useEffect, useState } from "react";
import { HomeScreenNavigationProp } from "../Types";
import Movies from "./Movies";
import Skeleton from "./Skeleton";
import { ThemeProvider } from "@rneui/themed";
import Upcoming from "./Upcoming";
import { FlatGrid } from "react-native-super-grid";

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

const Home: React.FC = () => {
  const [trendingmovies, setTrendings] = useState([]);
  const [upcoming,setUpcoming]=useState([])
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [mark, setMark] = useState<Boolean>(false);

  const navigation = useNavigation<HomeScreenNavigationProp>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const getTrendingsmovies = async () => {
    const res = await fetch(`${baseurl}/trending/all/day?api_key=${apikey}`);
    const data = await res.json();
    setTrendings(data.results.slice(0, 11));
    
  };
  const getUpcoming = async () => {
    const res = await fetch(`${baseurl}/movie/upcoming?api_key=${apikey}&language=en-US&page=1`);
    const data = await res.json();
    setUpcoming(data.results)
    console.log(data.results)
  };

  useEffect(() => {
    getTrendingsmovies();
    getUpcoming()
  }, []);

  return (
    <SafeAreaView>
      <StyledView className="flex-1 h-[100%] bg-black">
        <StyledView className="flex flex-row h-14 px-4 py-1 w-full mb-2  text-white justify-between items-center">
          <FilmIcon color="aqua" size={24} />
          <Image
            className="w-12 h-12 object-cover rounded-full p-2"
            source={{
              uri: "https://images.pexels.com/photos/4041122/pexels-photo-4041122.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
            }}
          />
        </StyledView>
        <StyledView className=" mb-4 mt-2 px-6">
          <StyledView className=" bg-slate-300 items-center flex-1 flex-row  space-x-2 px-2 py-1 rounded-sm  ">
            <TextInput
              className="border-none  flex flex-1 py-2 px-6 "
              onChangeText={(value) => setSearch(value)}
              placeholder="movies"
              keyboardType="default"
            />
            {search.length > 1 && (
              <ThemeProvider>
                <Button
                  title="search"
                  onPress={() => {
                    navigation.navigate("searchpage", {
                      searchdata: search,
                    });
                  }}
                />
              </ThemeProvider>
            )}
          </StyledView>
        </StyledView>
        <StyledView className="flex gap-2  px-4 mb-4 ">
          <StyledText className="font-bold text-white">
            Popular movies
          </StyledText>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {trendingmovies.length>0?trendingmovies.map((movies: Moviedata) => (
                <Movies movies={movies} />
              ))
             : (
              <Skeleton/>
            )}
          </ScrollView>

        </StyledView>
        <StyledView className="flex gap-2  px-4 mb-4 ">
          <StyledText className="font-bold text-white">
           Upcoming movies
          </StyledText>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {upcoming.length>0?upcoming.map((trending: Moviedata) => (
                <Upcoming trending={trending} />
              ))
             : (
              <Skeleton/>
            )}
          </ScrollView>

        </StyledView>
        
        
       
      </StyledView>
    </SafeAreaView>
  );
};

export default withExpoSnack(Home);
