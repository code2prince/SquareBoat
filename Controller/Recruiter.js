import db from "../server.js";

export const recruiterRegisteration = async (req, res) => {
  let { Mobile, Email, Name, Password } = req.body;
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "recruiterRegisteration")
      .input("Mobile", Mobile)
      .input("Email", Email)
      .input("Name", Name)
      .input("Password", Password)
      .execute("SP_SquareBoat");
    console.log(recordset);

    return res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      StatusCode: recordset[0].StatusCode,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};

export const postJobOpening = async (req, res) => {
  let { jobDescriptions, jobTitle, yearsOfExp, jobID } = req.body;
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "postJobOpening")
      .input("jobDescriptions", jobDescriptions)
      .input("jobTitle", jobTitle)
      .input("yearsOfExp", yearsOfExp)
      .input("jobID", jobID)
      .execute("SP_SquareBoat");
    return res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      StatusCode: recordset[0].StatusCode,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};

export const recruiterLogin = async (req, res) => {
  let { Email, Password } = req.body;
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "recruiterLogin")
      .input("Email", Email)
      .input("Password", Password)
      .execute("SP_SquareBoat");
    return res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      StatusCode: recordset[0].StatusCode,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};

export const recruiterLogout = async (req, res) => {
  let { Email, Password } = req.body;
  console.log(req.body);
  try {
    const { recordset } = await db
      .request()
      .input("flag", "recruiterLogout")
      .input("Email", Email)
      .input("Password", Password)
      .execute("SP_SquareBoat");
    return res.status(200).json({
      Flag: recordset[0].Flag,
      Flag_Msg: recordset[0].Flag_Msg,
      StatusCode: recordset[0].StatusCode,
    });
  } catch (error) {
    console.log("err is: ", error);
    return res
      .status(200)
      .json({ Flag: "0", Flag_Msg: "something went wrong" });
  }
};
