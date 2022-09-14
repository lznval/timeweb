import { FC } from 'react';
import { getCommentsList, getInfoList, getLabelsList, getMainFrame, getNavigationList } from '../libs';
import Header from '../components/Header';
import Comments from '../components/Comments';
import Statistic from '../components/Statistic';
import Description from '../components/Description';
import Head from 'next/head';

interface IProps {
	navigationList?: API.NavigationList,
	mainFrame?: API.MainFrame,
	info?: API.InfoList,
	labels?: API.LabelsList,
	comments?: API.CommentsList
}

interface IMainFrame {
	subtitle?: string;
	heading?: string;
	button1link?: string;
	button1title?: string;
	button2link?: string;
	button2title?: string;
}

const App: FC<IProps> = ({ navigationList, mainFrame, info, labels, comments }) => {

	const MainFrame: IMainFrame = {
		subtitle: mainFrame?.mainFrame.subtitle,
		heading: mainFrame?.mainFrame.heading,
		button1link: mainFrame?.mainFrame.button1.link,
		button1title: mainFrame?.mainFrame.button1.title,
		button2link: mainFrame?.mainFrame.button2.link,
		button2title: mainFrame?.mainFrame.button2.title
	}	

	return (
		<>
			<Head>
				<title>Timeweb</title>
			</Head>
			<div className="wrapper">
				<div className="container">
					<Header navigationList={navigationList} />
					<main className="main">
						<section className="info">
							<div className="info__header">{MainFrame.subtitle}</div>
							<div className="info__title">{MainFrame.heading}</div>
							<div className="info__links">
								<div className="info__links-button aboutus"><a href={MainFrame.button1link}>{MainFrame.button1title}</a></div>
								<div className="info__links-button"><a href={MainFrame.button2link}>{MainFrame.button2title}</a></div>
							</div>
						</section>
						<Description info={info} />
						<Statistic labels={labels} />
						<Comments comments={comments}/>
					</main>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context: any) {
	const navigationList = await getNavigationList();
	const mainFrame = await getMainFrame();
	const info = await getInfoList();
	const labels = await getLabelsList();
	const comments = await getCommentsList();

	return {
		props: {
			navigationList,
			mainFrame,
			info,
			labels,
			comments
		}
	}
}

export default App;