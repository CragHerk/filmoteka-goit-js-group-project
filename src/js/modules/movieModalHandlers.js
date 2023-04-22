import { setQueued, setWatched } from './myLibraryHandlers';

const qs = s => document.querySelector(s);

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
};

const refs = {
  modal: qs('.movie-modal-backdrop'),
  modalContainer: qs('.modal__container'),
  modalWatchedBtn: qs('.modal__btn--to-watched'),
  modalQueueBtn: qs('.modal__btn--to-queue'),
  modalCloseBtn: qs('.modal__close-btn'),
};

export const openMovieModal = async id => {
  const setQueuedCb = (id => setQueued(id))(id);
  const setWatchedCb = (id => setWatched(id))(id);
  const closeMovieModal = () => {
    toggleModal();
    refs.modalCloseBtn.removeEventListener('click', closeMovieModal);
    refs.modalQueueBtn.removeEventListener('click', setQueuedCb);
    refs.modalWatchedBtn.removeEventListener('click', setWatchedCb);
    refs.modalContainer.innerHTML = '';
  };

  refs.modalCloseBtn.addEventListener('click', closeMovieModal);
  refs.modalQueueBtn.addEventListener('click', setQueuedCb);
  refs.modalWatchedBtn.addEventListener('click', setWatchedCb);
  toggleModal();
  return closeMovieModal;
};