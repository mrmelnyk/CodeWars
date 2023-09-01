//Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

//One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, 
//so we generally have a rough idea of the minimum salary we would be satisfied with.

//Let's give this a try. We'll create a function match which takes a candidate and a job,
//which will return a Boolean indicating whether the job is a valid match for the candidate.

//If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

//For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. 
//However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time.
//The company offering the job may be able to work something out.

function match(candidate, job) {
    if (!job.maxSalary || !candidate.minSalary) {
      throw 'Error'
    }
    return job.maxSalary >= (candidate.minSalary * 0.9)
  }
