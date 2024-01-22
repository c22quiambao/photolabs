//TopicListItem.jsx
import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
	const { id, slug, title, setSelectedTopic } = props;
	console.log("ReadTopicListItem");
	console.log('SLUG!!!!!!', slug);
	  const handleClick = () => {
			setSelectedTopic(id); // Call the onClick function with the topic id
		};
	return (
		<div
			className="topic-list__item"
			key={id}
			onClick={handleClick}
		>
			<span>{title}</span>
		</div>
	);
};

export default TopicListItem;
