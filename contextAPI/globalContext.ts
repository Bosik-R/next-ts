import { createContext, useContext } from 'react';
import { SingleNewsObjectProps } from '../interfaces';
export interface GlobalContextProps {
	singleNewsContext: SingleNewsObjectProps;
	setSingleNewsContext: (data: SingleNewsObjectProps) => void;
}

export const initialSingleNewsObjectData = {
	_id: '',
	title: '',
	author: '',
	description: '',
	image: '',
	url: '',
};

export const GlobalContext = createContext<GlobalContextProps>({
	singleNewsContext: initialSingleNewsObjectData,
	setSingleNewsContext: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
