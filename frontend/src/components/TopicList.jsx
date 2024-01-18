//TopicList.jsc
import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {
	//console.log("!!!!!! TOPIC LIST !!!!!! ");
	//console.log("---------------------------------------------------");
	//console.log("   topics contents:", topics);
	//console.log("   Is passed topics an Array?", Array.isArray(topics));
	//console.log("   topics is TYPE OF:", typeof topics);

	return (
		<div className="top-nav-bar__topic-list">
			{/* Insert React */}
			{topics.map((topic) => {
				//console.log("Topic item being read", topic);
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
