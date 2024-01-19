//TopicList.jsc
import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
		console.log("Read TopicList");

	return (
		<div className="top-nav-bar__topic-list">
			{topics.map((topic) => {
				return (
					<TopicListItem
						key={topic.id}
						{...topic}
					/>
				);
			})}
		</div>
	);
};

export default TopicList;
