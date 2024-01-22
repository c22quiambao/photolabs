//TopicList.jsc
import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, setSelectedTopic }) => {
	console.log("Read TopicList");
	console.log(setSelectedTopic);

	return (
		<div className="top-nav-bar__topic-list">
			{topics.map((topic) => {
				return (
					<TopicListItem
						key={topic.id}
						{...topic}
						setSelectedTopic={setSelectedTopic}
					/>
				);
			})}
		</div>
	);
};

export default TopicList;
