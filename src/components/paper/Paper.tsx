import { ReactNode } from 'react';
import LazyLoad from 'react-lazyload';
import './Paper.scss';

type PaperPropsType = {
	children?: ReactNode;
	icon?: string;
	title: string;
};

const LazyLoadAny = LazyLoad as any;

export const Paper = ({ children, ...props }: PaperPropsType) => {
	return (
		<section className='paper'>
			<LazyLoadAny height={50}>
				<img src={props.icon} alt='my skill' className='paper__icon' />
			</LazyLoadAny>
			<h3 className='paper__title'>{props.title}</h3>
		</section>
	);
};
