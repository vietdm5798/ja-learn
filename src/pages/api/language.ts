import type { NextApiRequest, NextApiResponse } from "next";
import { LanguageResponse } from "@/types/ApiResponse";

const path = require("path");
const fs = require("fs");
const methodAllow = ["get", "post"];
const fileDatabase = path.resolve("./databases/language.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse<LanguageResponse>) {
  const method = req.method?.toLowerCase() || "";

  if (!methodAllow.includes(method)) {
    return res.status(405).json({
      success: false,
      message: "method not allow",
    });
  }

  let languages = [];

  try {
    languages = await fs.readFileSync(fileDatabase);
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "cannot read data",
    });
  }

  languages = JSON.parse(languages);

  if (method === "get") {
    return res.status(200).json({
      success: true,
      message: "get data success",
      data: languages,
    });
  }

  const body = req.body;

  if (!body.lang_vi || !body.lang_ja) {
    return res.status(400).json({
      success: false,
      message: "Vi or Ja not correct!",
    });
  }

  languages.push({
    lang_vi: body.lang_vi,
    lang_ja: body.lang_ja,
  });

  try {
    await fs.writeFileSync(fileDatabase, JSON.stringify(languages));
    return res.status(200).json({
      success: true,
      message: "Create new record success!",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Has error when create new record!",
    });
  }
}
