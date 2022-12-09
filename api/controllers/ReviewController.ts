import { Request, Response } from "express";
import connectMongo from "../db/ConnectMongo";
import reviewSchema from "../models/ReviewSchema";

const createReview = async (req: Request, res: Response) => {
  await connectMongo('reviews');

  try {
      const created = await reviewSchema.create(req.body);

      let code = created ? 201 : 500;
      let msg = created ? "Review successfully created" : "Failed to create review";

      res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
      res.status(code).json({
        status: code,
        message: msg,
        data: {
          _id: created?._id,
          name: created?.name,
          content: created?.content,
          stars: created?.stars,
          __v: created?.__v,
        },
      });

  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const getReview = async (req: Request, res: Response) => {
  await connectMongo('reviews');

  try {
    const reviewData = await reviewSchema.find(
      req.body.id
        ? {
            id: req.body.id,
          }
        : {}
    );

    let code = reviewData.length ? 200 : 404;
    let msg = reviewData.length ? "Reviews successfully retrieved" : "No review found";

    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(code).json({
      status: code,
      message: msg,
      data: [...reviewData],
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const getReviewById = async (req: Request, res: Response) => {
  await connectMongo('reviews');

  try {
    const reviewData = await reviewSchema.findOne({
      key: req.params.key ?? "",
    });

    let code = reviewData ? 200 : 404;
    let msg = reviewData ? "Review successfully retrieved" : "No review found";

    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(code).json({
      status: code,
      message: msg,
      data: reviewData,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

export { createReview, getReview, getReviewById };