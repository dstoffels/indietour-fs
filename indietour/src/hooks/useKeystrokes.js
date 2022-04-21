const useKeystrokes = eventHandler => {
	const handleKeyPress = useCallback(e => {
		eventHandler(e);
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);

		return () => document.removeEventListener('keydown', handleKeyPress);
	}, [handleKeyPress]);
};

export default useKeystrokes;
