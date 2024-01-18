//TopicListItem.jsx
import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
	//console.log("!!!!!! TOPIC LIST ITEM !!!!!! ");
	//console.log("---------------------------------------------------");
	//console.log("   props contents:", props);
	//console.log("   Is passed props an Array?", Array.isArray(props));
	//console.log("   props is TYPE OF:", typeof props);

	const { id, slug, title } = props;

	return (
		<div
			className="topic-list__item"
			key={id}
		>
			<span>{title}</span>
		</div>
	);
};

export default TopicListItem;
