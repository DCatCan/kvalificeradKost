import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../data";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const requestDetails = req.body.details;

    console.log(requestDetails);
    const savedRequest = await prisma.forfragning.create({
      data: {
        fId: requestDetails.fId,
        fullName: requestDetails.fullName,
        email: requestDetails.email,
        telephone: requestDetails.telephone,
        serviceId: parseInt(requestDetails.serviceId),
      },
    });

    res.json(savedRequest);
  }
}
