import { DateTime } from "luxon";
import { Plans } from "models";
import { Success } from "_utils/response";

export const createPlan = async (req, res) => {
  const { _id } = res.locals.user;
  const { task, description, type, time } = req.body;

  const plan = await Plans.create({
    task,
    description,
    type,
    time: time || DateTime.now(),
    user: _id
  });

  res.json(Success("Plan created successfully.", plan));
}

export const getPlans = (req, res) => {
  const { id, from, to } = req.query;
}

export const putPlan = (req, res) => {

}

export const deletePlan = (req, res) => {

}