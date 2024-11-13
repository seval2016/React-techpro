import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "./people.json";
import { TfiTrash } from "react-icons/tfi";
import { MdCelebration } from "react-icons/md";

import User from "./user";

const UserList = () => {
	const newUserList = data.map((item) => ({ ...item, isCelebrated: false }));
	//diziyi manipule edip her dönüşte bütün elemanlara "isCelebrated: false" eklenmesi için

	const [users, setUsers] = useState(newUserList);

	const celebrateAllUsers = () => {
		const arr = users.map((item) => ({ ...item, isCelebrated: true }));
		setUsers(arr);
	};

	const celebrateUser = (id) => {
		const arr = users.map((item) =>
			item.id === id ? { ...item, isCelebrated: true } : item
		);
		setUsers(arr);
		
	};
		
	return (
		<Container className="mt-4">
			<h2>Birthday people</h2>
			<p>{users.length} people were born today</p>

			{users.map((item) => (
				<User key={item.id} {...item} celebrateUser={celebrateUser} />
				
			))}

			<Button onClick={celebrateAllUsers} disabled={users.length <= 0}>
				<MdCelebration /> Celebrate All
			</Button>

			<Button
				onClick={() => setUsers([])}
				className="ms-3"
				variant="danger"
				disabled={users.length <= 0}
			>
				<TfiTrash /> Clear All
			</Button>
		</Container>
	);
};

export default UserList;