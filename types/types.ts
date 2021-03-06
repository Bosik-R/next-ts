export interface SingleNewsObjectProps {
	_id: string;
	author?: string;
	title: string;
	image: string;
	description: string;
	url: string;
}

export interface NewsProps {
	news: Array<SingleNewsObjectProps>;
}

export interface GlobalContextProps {
	singleNewsContext: SingleNewsObjectProps;
	setSingleNewsContext: (data: SingleNewsObjectProps) => void;
}
