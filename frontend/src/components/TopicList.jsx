//TopicList.jsc
import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
	console.log("!!!!!! TOP LIST !!!!!! ");
	console.log("Is Array?", Array.isArray(topics));
	console.log("Topics %%%%%% :", topics);

	return (
		<div className="top-nav-bar__topic-list">
			{/* Insert React */}
			{topics.map((topic) => {
				console.log("Topic item being read", topic);
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
