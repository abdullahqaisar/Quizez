export const styles = {
  
  
};

export const difficulties = [
  { id: "total_easy_question_count", name: "Easy" },
  { id: "total_medium_question_count", name: "Medium" },
  { id: "total_hard_question_count", name: "Hard" },
];

export const createMarkup = (text) => {
  return { __html: text };
};
