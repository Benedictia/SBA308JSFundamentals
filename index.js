// Step 1: Define data structures

const courseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
console.log(courseInfo);

//  //The provided assignment group.
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25}
  const assignments = [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2024-10-01",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2024-09-30",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ];
 
//looping through the assignment using forEach

console.log(`The ID of the course the assignment group belongs to "course_id": ${assignmentGroup.id}`);

console.log(`Name: ${assignmentGroup.name}`);
console.log(`Course ID: ${assignmentGroup.course_id}`);
console.log(`The percentage weight of the entire assignment "group_weight": ${assignmentGroup.group_weight}`);


// // Checking overdue or upcoming assignments


const currentDate = new Date();


assignments.forEach(assignment => {
  console.log(`  Assignment ID: ${assignment.id}`+ `  Name: ${assignment.name}`+ `  The Due Date is: ${assignment.due_at}`);
  
  console.log(`  Points Possible: ${assignment.points_possible}`);
  
  // Determine the status of each assignment based on the due date
  const dueDate = new Date(assignment.due_at);
  if (dueDate < currentDate) {
    console.log(`  Status: Overdue!`);
  } else {
    console.log(`  Status: Upcoming.`);
  }
});

// // The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
//calculating learners scores
function calculateLearnerScores(submissions) {
  const scores = {};

  submissions.forEach(({ learner_id, submission }) => {
    if (!scores[learner_id]) {
      scores[learner_id] = { totalScore: 0, count: 0 };
    }
    
    scores[learner_id].totalScore += submission.score;
    scores[learner_id].count += 1;
  })
  // Calculate averages and format the result
  const results = Object.entries(scores).map(([learner_id, { totalScore, count }]) => ({
    learner_id: parseInt(learner_id),
    totalScore,
    averageScore: (totalScore / count)
  }));

  return results;
}
const learnerScores = calculateLearnerScores(LearnerSubmissions);

console.log(learnerScores);


// // Function to get due assignments and reduce points by 10% for late assignments
function getDueAssignments(assignments) {
  const currentDate = new Date();

  const dueAssignments =assignments
    .filter(assignment => new Date(assignment.due_at) < currentDate) // Filter due assignments
    .map(assignment => {
      // Reduce points by 10%
      const reducedPoints = assignment.points_possible * 0.9;
      return {
        ...assignment, // Spread the existing assignment properties
        points_possible: reducedPoints // Override the points_possible with reduced points
      };
    });

  return dueAssignments;
}

// // Get due assignments and display them
const dueAssignments = getDueAssignments(assignments);
console.log("Due Assignments with Reduced Points:", (dueAssignments) );
