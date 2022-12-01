import { Request, Response } from "express";
import connectMongo from "../db/ConnectMongo";
import MaterialsSchema from "../models/MaterialsSchema";

const createMaterial = async (req: Request, res: Response) => {
  await connectMongo('materials');

  try {
    const keyCheck = await MaterialsSchema.findOne({
      key: req.body.key ?? ""
    });

    if(keyCheck) {
      let code = 500;
      let msg = "Failed to create data (Key already exists)";

      res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
      res.status(code).json({
        status: code,
        message: msg,
      });
    } else {
      const created = await MaterialsSchema.create(req.body);

      let code = created ? 201 : 500;
      let msg = created ? "Data successfully created" : "Failed to create data";

      res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
      res.status(code).json({
        status: code,
        message: msg,
        data: {
          _id: created?._id,
          key: created?.key,
          name: created?.name,
          driveUrl: created?.driveUrl,
          __v: created?.__v,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const getMaterial = async (req: Request, res: Response) => {
  await connectMongo('materials');

  try {
    const materialsData = await MaterialsSchema.find(
      req.body.key
        ? {
            key: req.body.key,
          }
        : {}
    );

    let code = materialsData.length ? 200 : 404;
    let msg = materialsData.length ? "Data successfully retrieved" : "No data found";

    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(code).json({
      status: code,
      message: msg,
      data: [...materialsData],
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const getMaterialByKey = async (req: Request, res: Response) => {
  await connectMongo('materials');

  try {
    const materialsData = await MaterialsSchema.findOne({
      key: req.params.key ?? "",
    });

    let code = materialsData ? 200 : 404;
    let msg = materialsData ? "Data successfully retrieved" : "No data found";

    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(code).json({
      status: code,
      message: msg,
      data: materialsData,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const deleteMaterial = async (req: Request, res: Response) => {
  await connectMongo('materials');

  try {
    const deleted = await MaterialsSchema.deleteOne({
      key: req.params.key ?? "",
    });

    let msg =
      deleted.deletedCount > 0 ? "Data successfully deleted" : "No data found";
    let code = deleted.deletedCount > 0 ? 200 : 404;

    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(code).json({
      status: code,
      message: msg,
      data: {
        ...deleted,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const updateMaterial = async (req: Request, res: Response) => {
  await connectMongo('materials');

  try {
    const updated = await MaterialsSchema.findOneAndUpdate(
      {
        key: req.params.key ?? "",
      },
      {
        ...req.body,
      },
      { new: true }
    );

    console.log(req.params.key);
    console.log(req.body.name)

    let msg = updated ? "Data successfully updated" : "No data found";
    let code = updated ? 200 : 404;

    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(code).json({
      status: code,
      message: msg,
      data:
        {
            _id: updated?._id,
            key: updated?.key,
            name: updated?.name,
            driveUrl: updated?.driveUrl,
            __v: updated?.__v,
        } ?? {},
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

export { createMaterial, getMaterial, getMaterialByKey, deleteMaterial, updateMaterial };