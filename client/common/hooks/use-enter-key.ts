export const useEnterKey = (callback: () => void) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      callback();
    }
  };

  return { handleKeyDown };
};
