import DeleteBandModal from 'Components/Pages/Console/Bands/DeleteBandModal/DeleteBandModal.jsx';
import EditBandModal from 'Components/Pages/Console/Bands/EditBandModal/EditBandModal.jsx';
import NewBandModal from 'Components/Pages/Console/Bands/NewBandModal/NewBandModal.jsx';
import DeleteTourModal from 'Components/Pages/Console/Tours/DeleteTourModal/DeleteTourModal.jsx';
import EditTourModal from 'Components/Pages/Console/Tours/EditTourModal/EditTourModal.jsx';
import NewTourModal from 'Components/Pages/Console/Tours/NewTourModal/NewTourModal.jsx';
import AddDateModal from 'Components/Pages/Dates/AddDateModal/AddDateModal.jsx';
import DeleteContactModal from 'Components/Pages/Dates/DateDetailsPanel/Contacts/DeleteContactModal/DeleteContactModal.jsx';
import DeleteDateModal from 'Components/Pages/Dates/DateDetailsPanel/DeleteDateModal/DeleteDateModal.jsx';
import DeleteEventModal from 'Components/Pages/Dates/DateDetailsPanel/Schedule/TimeSlot/TimeSlotCard/DeleteEventModal/DeleteEventModal.jsx';
import DaySheetModal from 'Components/Pages/Dates/DaySheetModal/DaySheetModal.jsx';
import DiscardChangesModal from 'Components/Pages/Dates/DiscardChangesModal/DiscardChangesModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { showDeleteModal } from '../DeleteModal/deleteModalSlice.js';
import { showModal } from './mainModalSlice.js';

const useModal = () => {
	const dispatch = useDispatch();
	const { mainModal, deleteModal } = useSelector(state => state);

	const openMainModal = modalKey => dispatch(showModal(modalKey));
	const closeMainModal = () => dispatch(showModal(''));

	const openDeleteModal = modalKey => dispatch(showDeleteModal(modalKey));
	const closeDeleteModal = () => dispatch(showDeleteModal(''));

	/**
	 * These are set to store.mainModal / store.deleteModal
	 * These modals automatically select from the modals object based on the active key
	 */
	const modalKeys = {
		// Bands
		newBand: 'newBand',
		editBand: 'editBand',
		delBand: 'delBand',

		// Tours
		newTour: 'newTour',
		editTour: 'editTour',
		delTour: 'delTour',

		// Dates
		newDate: 'newDate',
		editDate: 'editDate',
		delDate: 'delDate',
		discardDateChanges: 'discardDateChanges',

		// Events
		delEvent: 'delEvent',

		// Contacts
		delContact: 'delContact',

		// Day Sheet
		daySheet: 'daySheet',
	};

	const modals = {
		// Bands
		[modalKeys.newBand]: <NewBandModal />,
		[modalKeys.editBand]: <EditBandModal />,
		[modalKeys.delBand]: <DeleteBandModal />,

		// Tours
		[modalKeys.newTour]: <NewTourModal />,
		[modalKeys.editTour]: <EditTourModal />,
		[modalKeys.delTour]: <DeleteTourModal />,

		// Dates
		[modalKeys.newDate]: <AddDateModal />,
		[modalKeys.delDate]: <DeleteDateModal />,
		[modalKeys.discardDateChanges]: <DiscardChangesModal />,

		// Events
		[modalKeys.delEvent]: <DeleteEventModal />,

		// Contacts
		[modalKeys.delContact]: <DeleteContactModal />,

		[modalKeys.daySheet]: <DaySheetModal />,
	};

	return {
		modalKeys,
		modals,
		mainModal,
		openMainModal,
		closeMainModal,
		deleteModal,
		openDeleteModal,
		closeDeleteModal,
	};
};

export default useModal;
