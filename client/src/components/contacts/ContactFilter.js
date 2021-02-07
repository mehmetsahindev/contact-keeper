import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const contactContexct = useContext(ContactContext);
	const text = useRef();

	const { filterContacts, clearFilter, filtered } = contactContexct;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = (e) => {
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form action=''>
			<input
				ref={text}
				type='text'
				placeholder='Filter contacts'
				onChange={onChange}
			/>
		</form>
	);
};

export default ContactFilter;
