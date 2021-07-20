const quizData = {
  title: "App Runner Quiz",
};

const questions = [
  {
    text: "If you hear these three words, you know it is App Runner",
    type: "mc",
    answers: [
      { text: "Hard to use, Scales with traffic, No time", correct: false },
      { text: "Mediocre to use, Scales down traffic, Z time", correct: false },
      { text: "Easy to use, Scales with traffic, Saves time", correct: true },
      { text: "Dont want use, Cannot Scale, Fargate", correct: false },
    ],
  },
  {
    text: "How to use App Runner the shortest and easiest way?!",
    type: "mc",
    answers: [
      { text: "Connect to github repo", correct: true },
      { text: "Write Cloudformation template and deploy", correct: false },
      { text: "Create an EKS cluster and pull image from ECR", correct: false },
      { text: "Use Fargate instead", correct: false },
    ],
  },
  {
    text: "When do you want to use App Runner??",
    type: "mc",
    answers: [
      { text: "To hack friend's acc", correct: false },
      { text: "To deploy front-end or back-end app", correct: true },
      { text: "To become a bar-raiser", correct: false },
      { text: "When you dont want to use App Jogger", correct: false },
    ],
  },
  {
    text: "Which App Runner use cases is the cheapest??",
    type: "mc",
    answers: [
      { text: "8 hours of usage and 3 peak hours", correct: false },
      { text: "Deploying in a production environment", correct: false },
      { text: "For testing purposes only", correct: true },
      { text: "24 hours of people accessing your API", correct: false },
    ],
  },
  {
    text: "What is my @? XD",
    type: "txt",
    answers: ["muroslan"],
  },
];

module.exports = { quizData, questions };
