import { MEMBER } from 'constants/roles.js';
import useUser from 'hooks/useUser.js';

const Authorize = ({ children }) => {
	const { role } = useUser();

	return Boolean(role) && role !== MEMBER ? children : null;
};

export default Authorize;
