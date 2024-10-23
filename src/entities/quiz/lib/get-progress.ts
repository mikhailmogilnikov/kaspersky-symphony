export const getQuizProgress = (correctAnswers: number) => {
  switch (correctAnswers) {
    case 0:
    case 1:
    case 2:
      return '25%';
    case 3:
    case 4:
      return '50%';
    case 5:
    case 6:
      return '75%';
    case 7:
    default:
      return '100%';
  }
};
