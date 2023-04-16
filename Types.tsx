import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
export type HomeStackNavigatorParamList={
    home:undefined,
    details:{
        name?:string,
        itemId?:number,
        

    }
    searchpage:{
      name?:string,
      searchdata:string,
     
      
    },
    setOptions:any
    navigate:any
   
    
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'details',
  'searchpage'
  
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'details'
  
  
  
>;
export type SearchScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'searchpage'
  
  
  
>;


export type searchdata={
  id?: number;
  original_title?: String;
  media_type: String;
  popularity: number;
  poster_path?: String;
  vote_count: number;
  name?: String;

}