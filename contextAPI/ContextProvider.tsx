import { createContext, useContext, useState } from 'react';
import { SingleNewsObjectProps, GlobalContextProps } from '../types/types';

export const initialSingleNewsObjectData = {
	_id: '',
	title: '',
	author: '',
	description: '',
	image: '',
	url: '',
};

const GlobalContext = createContext<GlobalContextProps>({
	singleNewsContext: initialSingleNewsObjectData,
	setSingleNewsContext: () => {},
});

export const SingleNewsProvider: React.FC = ({ children }) => {
	const [singleNewsContext, setSingleNewsContext] = useState<SingleNewsObjectProps>(
		initialSingleNewsObjectData
	);
	return (
		<GlobalContext.Provider value={{ singleNewsContext, setSingleNewsContext }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useSingleNewsContext = () => useContext(GlobalContext);
