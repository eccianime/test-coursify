import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IPost } from '../components/PostItem/types';

export type BaseNavigatorParams = {
    Home: undefined;
    Post: { data: IPost };
};

export type BaseNavigationProps = NativeStackNavigationProp<BaseNavigatorParams>;

export type PostRouteProps = RouteProp<BaseNavigatorParams, 'Post'>;
