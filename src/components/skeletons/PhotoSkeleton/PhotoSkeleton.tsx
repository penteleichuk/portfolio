import { ReactNode } from 'react';
import './PhotoSkeleton.scss';

type PhotoSkeletonType = {
	children: ReactNode
}

export const PhotoSkeleton = ({ children }: PhotoSkeletonType) => {
	return <div className="skeleton is-loading">
		<div className="image">{children}</div>
	</div>
}