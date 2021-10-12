import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';
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
