import {
	ApiIcon,
	CSSIcon,
	DockerIcon,
	FigmaIcon,
	GitIcon,
	HtmlIcon,
	JqueryIcon,
	JsIcon,
	LaravelIcon,
	MuiIcon,
	PhotoshopIcon,
	PhpIcon,
	ReactIcon,
	ReduxIcon,
	SASSIcon,
	StoryBookIcon,
	TestIcon,
	TsIcon,
} from '../utilities/icons';

type MySkillDataType = {
	title: string;
	image: string;
};

export const MySkillData: Array<MySkillDataType> = [
	{
		title: 'REACT',
		image: ReactIcon,
	},
	{
		title: 'REDUX',
		image: ReduxIcon,
	},
	{
		title: 'TS',
		image: TsIcon,
	},
	{
		title: 'JS',
		image: JsIcon,
	},
	{
		title: 'StoryBook',
		image: StoryBookIcon,
	},
	{
		title: 'PHP',
		image: PhpIcon,
	},
	{
		title: 'Laravel',
		image: LaravelIcon,
	},
	{
		title: 'HTML5',
		image: HtmlIcon,
	},
	{
		title: 'CSS',
		image: CSSIcon,
	},
	{
		title: 'Sass/scss',
		image: SASSIcon,
	},
	{
		title: 'MUI',
		image: MuiIcon,
	},
	{
		title: 'jquery',
		image: JqueryIcon,
	},
	{
		title: 'Rest API',
		image: ApiIcon,
	},
	{
		title: 'Unit Test',
		image: TestIcon,
	},
	{
		title: 'Git',
		image: GitIcon,
	},
	{
		title: 'Docker',
		image: DockerIcon,
	},
	{
		title: 'photoshop',
		image: PhotoshopIcon,
	},
	{
		title: 'figma',
		image: FigmaIcon,
	},
];
